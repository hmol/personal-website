import * as bcrypt from "bcryptjs";
import User from "../models/user";
var _ = require('lodash');
const Firestore = require('@google-cloud/firestore');
const firestoreDb = new Firestore();
const collection = firestoreDb.collection('users');


export default class UserRepo {
    static getUser(username: string): Promise<User> {
        console.log('inside getUser');
        var docRef = collection.doc(username.toLowerCase());
        return docRef.get().then(function(doc: any) {
            if (!doc.exists) {
              console.log('no user found')
              return null;
            }
            let user = doc.data() as User;
            return user;
        });
    }

    static async getUsers(){
        console.log('userRepo getUsers()');
        let snapshot = await collection.get();
        return snapshot.docs.map(doc => doc.data().username);
    }
   
   static create(username: string, password: string) {
        bcrypt.hash(password, 10, (err, hash) => {
            console.log('bcrypt hash: ' + hash);
            collection.doc(username.toLowerCase()).set({username: username.toLowerCase(), password: hash});
        });
    }
}