import express from "express";
import {controller as AdvertisementController}
    from "./controller/advertisement.http.controller.js";
import {controller as UserController}
    from "./controller/user.http.controller.js";
import {ping as pingToDatabase} from "./database/pool.database.js";

const app = express();

/* point to AdvertisementController */
app.use('/advertisements', AdvertisementController);
/* point to UserController */
app.use('/users', UserController);

/* trying to connect with the database as soon as app starts */
console.log('Trying to connect with database server');
await pingToDatabase(); /* ping to database, there is no point
    in going further if database doesn't connect */
console.log('Connected to the database server - OK');

/* start server */
app.listen(5050,  () => {
    console.log("Server is listening on port 5050");
});