var _ = require('lodash');
const repository = require('./repository');
import express = require('express');

// https://firebase.google.com/docs/firestore/quickstart
// https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e
module.exports = function(app: express.Application) {
    app.post('/header', function(req, res){
        repository.create('headertext', req.body.header, 'text');
        res.json({info: 'Headertext successfully created'});
    });

    app.put('/header', function(req, res) {
        repository.update('headertext', req.body.header, 'text');
        res.json({info: 'Headertext successfully updated'});
    });

    app.post('/about', function(req, res){
        repository.create('about', req.body.about, 'text');
        res.json({info: 'Abouttext successfully created'});
    });

    app.put('/about', function(req, res) {
        repository.update('about', req.body.about, 'text');
        res.json({info: 'Abouttext successfully updated'});
    });

    app.get('/', function(req, res) {
        res.json({info: 'Hello world!'});
    });
};