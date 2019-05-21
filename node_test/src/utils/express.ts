const dotenv = require("dotenv").config();
var cors = require('cors');
const express = require("express");
const auth = require("../utils/auth").default;
const bodyParser = require("body-parser");
// const expressValidator = require("express-validator");


export = () => {
    let app = express();
    console.log('express.ts');

    app.use(cors());
    app.get("/", (req: any, res: any) => res.status(200).json({ message: "Welcome to API." }));
    app.use(bodyParser.json());
    app.use(auth.initialize());

    app.all(process.env.API_BASE + "*", (req: any, res: any, next: any) => {
        if (req.path.includes(process.env.API_BASE + "login")) {
            console.log('request path is login');
            next();
            return;
        }

        auth.authenticate((err: any, user: any, info: any) => {
        if (err) { next(err); return; }
        if (!user) {
            if (info.name === "TokenExpiredError") {
                res.status(401).json({ message: "Your token has expired. Please generate a new one" });
            } else {
                res.status(401).json({ message: info.message });
            }
        }
        app.set("user", user);
        next();
        return;
        })(req, res, next);
    });

    const routes = require("../routes")(app);

    return app;
};