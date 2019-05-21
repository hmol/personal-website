"use strict";
var dotenv = require("dotenv").config();
var express = require("express");
var auth = require("../utils/auth").default;
var bodyParser = require("body-parser");
module.exports = function () {
    var app = express();
    app.use(bodyParser.json());
    //app.use(expressValidator());
    app.use(auth.initialize());
    app.all(process.env.API_BASE + "*", function (req, res, next) {
        if (req.path.includes(process.env.API_BASE + "login"))
            return next();
        return auth.authenticate(function (err, user, info) {
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
    var routes = require("../routes")(app);
    return app;
};
