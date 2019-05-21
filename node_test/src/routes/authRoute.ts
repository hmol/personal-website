import Auth from "../utils/auth";

export = (app: any) => {
    console.log('authRoute.ts');
    app.post(process.env.API_BASE + "login", Auth.login);
    app.get(process.env.API_BASE + "users", Auth.getUsers);
    // app.options(process.env.API_BASE + "login", (req: any, res: any) => { return res.status(200); });
};