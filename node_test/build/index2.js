"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bcrypt = __importStar(require("bcryptjs"));
// import * as moment from "moment";
var passport_jwt_1 = require("passport-jwt");
var jwt = __importStar(require("jwt-simple"));
var moment = require('moment');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
// Create a new express application instance
var app = express();
var bodyParser = require('body-parser');
var Firestore = require('@google-cloud/firestore');
var firestoreDb = new Firestore();
var collection = firestoreDb.collection("users");
var port = process.env.PORT || 3001;
var JWT_SECRET = 'b0epwdaWjKLbkiK6R#fOpR*jfnyud!EH!VI3Q4Ocb4';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
passport.use("jwt", getStrategy());
// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });
var authenticate = function (callback) { return passport.authenticate("jwt", { session: false, failWithError: true }, callback); };
function getStrategy() {
    var params = {
        secretOrKey: JWT_SECRET,
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeader(),
        passReqToCallback: true
    };
    return new passport_jwt_1.Strategy(params, function (req, payload, done) {
        var docRef = collection.doc(payload.username.toLowerCase());
        return docRef.get().then(function (doc) {
            if (!doc.exists) {
                return done(null, false, { message: "The user in the token was not found" });
            }
            var user = doc.data();
            return done(null, { _id: user._id, username: user.username });
        });
    });
}
function authenticateCredentials(username, password) {
    var docRef = collection.doc(username.toLowerCase());
    return docRef.get().then(function (doc) {
        if (!doc.exists) {
            return false;
        }
        var user = doc.data();
        return bcrypt.compare(password, user.password, function (err, success) {
            if (success) {
                console.log('bcrypt: password is match');
            }
            return success;
        });
    });
}
app.all("*", function (req, res, next) {
    if (req.path.includes("login"))
        return next();
    return authenticate(function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            if (info.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
            }
            else {
                return res.status(401).json({ message: info.message });
            }
        }
        app.set("user", user);
        return next();
    })(req, res, next);
});
var routes = require('./routes')(app);
app.post('/login', function (req, res) {
    if (!authenticateCredentials(req.body.username, req.body.password)) {
        console.log('not authenticated');
        res.status(401).json('Error logging in');
    }
    else {
        res.status(200).json(genToken(req.body.username));
    }
});
function genToken(username) {
    var expires = moment().utc().add({ days: 7 }).unix();
    var token = jwt.encode({
        exp: expires,
        username: username
    }, JWT_SECRET);
    return {
        token: "JWT " + token,
        expires: moment.unix(expires).format(),
        user: username
        // user: user._id
    };
}
app.get('/failed-login', function (req, res) {
    res.json({ info: 'Failed login' });
});
app.post('/register', function (req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        console.log('bcrypt hash: ' + hash);
        collection.doc(req.body.username).set({ username: req.body.username, password: hash });
    });
    res.json({ info: 'User successfully created' });
});
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:3001/');
});
