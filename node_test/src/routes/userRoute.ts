import Auth from "../utils/auth";

export = (app: any) => {
    console.log('userRoute.ts');
    app.post(process.env.API_BASE + "user", Auth.create);
};