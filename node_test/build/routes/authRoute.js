"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var auth_1 = __importDefault(require("../utils/auth"));
module.exports = function (app) {
    app.post(process.env.API_BASE + "login", auth_1.default.login);
};
