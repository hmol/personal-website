var _ = require('lodash');
const Firestore = require('@google-cloud/firestore');
const firestoreDb = new Firestore();
const collection = firestoreDb.collection('content');

export function create(id: string, value: string, propertyName: string) {
    collection.doc(id).set({propertyName: value});
}

export function update(id: string, value: string, propertyName: string) {
    collection.doc(id).set({propertyName: value});
}
