const app = require("./utils/express")();

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log(`Express server listening on port ${port}.\nEnvironment: ${process.env.NODE_ENV}`);
});