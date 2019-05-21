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
var User = /** @class */ (function () {
    function User() {
        var _this = this;
        this.email = '';
        this.username = '';
        this.password = '';
        this.comparePassword = function (candidatePassword) {
            console.log('inside comparepassword');
            var password = _this.password;
            return new Promise(function (resolve, reject) {
                bcrypt.compare(candidatePassword, password, function (err, success) {
                    if (success) {
                        resolve(success);
                    }
                    else {
                        reject(err);
                    }
                });
            });
        };
        // comparePassword = (candidatePassword: string): Promise<boolean> => {
        //   console.log('inside comparepassword');
        //   let password = this.password;
        //   return new Promise((resolve, reject) => {
        //       bcrypt.compare(candidatePassword, password, (err, success) => {
        //           console.log('inside bcrypt compare: ' + success);
        //           if(success) {
        //             return resolve(success);
        //           }
        //           return reject(err);
        //       });
        //   });
        // };
    }
    return User;
}());
exports.default = User;
