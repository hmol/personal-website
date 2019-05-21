"use strict";
module.exports = function (app) {
    // Require the routes files in the routes directory
    require("./authRoute")(app);
    app.get("/", function (req, res) { return res.status(200).json({ message: "Welcome to API." }); });
    // If no route is matched by now, it must be a 404
    app.use(function (req, res, next) {
        res.status(404).json({ "error": "Endpoint not found" });
        next();
    });
    app.use(function (error, req, res, next) {
        // if (process.env.NODE_ENV === "production") {
        //     return res.status(500).json({ "error": "Unexpected error: " + error });
        // }
        next(error);
    });
};
