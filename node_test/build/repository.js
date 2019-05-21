"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
var Firestore = require('@google-cloud/firestore');
var firestoreDb = new Firestore();
var collection = firestoreDb.collection('content');
function create(id, value, propertyName) {
    collection.doc(id).set({ propertyName: value });
}
exports.create = create;
function update(id, value, propertyName) {
    collection.doc(id).set({ propertyName: value });
}
exports.update = update;
