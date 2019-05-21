import User from "../models/user";
import UserRepo from "../repositories/userRepo";

export = (app: any) => {
    // Require the routes files in the routes directory
    app.get("/", (req: any, res: any) => res.status(200).json({ message: "Welcome to API." }));

    require("./authRoute")(app);
    require("./userRoute")(app);
    app.get("/", (req: any, res: any) => res.status(200).json({ message: "Welcome to API." }));
    
    
    // If no route is matched by now, it must be a 404
    app.use((req: any, res: any, next: any) => {
        res.status(404).json({ "error": "Endpoint not found" });
        next();
    });

    app.use((error: any, req: any, res: any, next: any) => {
        // if (process.env.NODE_ENV === "production") {
        //     return res.status(500).json({ "error": "Unexpected error: " + error });
        // }
        next(error);
    });
};