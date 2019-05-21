import * as jwt from "jwt-simple";
const passport = require('passport');
import * as bcrypt from "bcryptjs";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/user";
import UserRepo from "../repositories/userRepo";
const moment = require("moment");

class Auth {

    public initialize = () => {
        passport.use("jwt", this.getStrategy());
        return passport.initialize();
    }

    public authenticate = (callback: any) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);

    private genToken = (user: User): Object => {
        let expires = moment().utc().add({ days: 7 }).unix();
        let token = jwt.encode({
            exp: expires,
            username: user.username
        }, (process.env.JWT_SECRET as string));

        return {
            token: "JWT " + token,
            expires: moment.unix(expires).format(),
            user: user.username
        };
    }

    public getUsers = async (req: any, res: any) => {
        console.log('inside get Users - auth.ts');
        return res.status(200).json(await UserRepo.getUsers());
    }

    public create = async (req: any, res: any) => {
        let user = await UserRepo.getUser(req.body.username);
        if (user !== null) {
            return res.status(400).json({ "message": "Username exists" });
        }
        await UserRepo.create(req.body.username, req.body.password);

        return res.status(200).json({ "message": "User created" });
    }

    public login = async (req: any, res: any) => {
        try {
            let user = await UserRepo.getUser(req.body.username);
            if (user === null) throw "User not found";

            console.log(user);
            console.log('user.comparePassword');

            let comparePromise = new Promise((resolve, reject) => {
                bcrypt.compare(req.body.password, user.password, (err, success) => {
                  if(success) {
                    resolve(success);
                  } else {
                    reject(err);
                  }
                });
            });
            
            return comparePromise.then((data) => {
                let success = data as boolean;
                if(success){
                    return res.status(200).json(this.genToken(user));
                } else {
                    return res.status(401).json({ "message": "Invalid credentials" });
                }
            }, (error: any) => {
                return res.status(401).json({ "message": "Invalid credentials", "errors": error });
            });
           
        } catch (err) {
            return res.status(401).json({ "message": "Invalid credentials", "errors": err });
        }
    }

    private getStrategy = (): Strategy => {
        const params = {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeader(),
            passReqToCallback: true
        };

        return new Strategy(params, (req: any, payload: any, done: any) => {
            return UserRepo.getUser(payload.username).then((user) => {
                if(user === null) {
                    return done(null, false, { message: "The user in the token was not found" });
                }
                return done(null, { _id: user.username, username: user.username });
            });            
        });
    }
}

export default new Auth();