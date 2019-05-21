"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = __importStar(require("bcryptjs"));
var _ = require('lodash');
var Firestore = require('@google-cloud/firestore');
var firestoreDb = new Firestore();
var collection = firestoreDb.collection('users');
var UserRepo = /** @class */ (function () {
    function UserRepo() {
    }
    UserRepo.getUser = function (username) {
        console.log('inside getUser');
        var docRef = collection.doc(username.toLowerCase());
        return docRef.get().then(function (doc) {
            if (!doc.exists) {
                console.log('no user found');
                return null;
            }
            var user = doc.data();
            return user;
        });
    };
    UserRepo.prototype.register = function (username, password) {
        bcrypt.hash(password, 10, function (err, hash) {
            console.log('bcrypt hash: ' + hash);
            collection.doc(username.toLowerCase()).set({ username: username.toLowerCase(), password: hash });
        });
    };
    return UserRepo;
}());
exports.default = UserRepo;
