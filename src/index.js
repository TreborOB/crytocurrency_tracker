import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {Mockgoose} from "mockgoose";
import usersRouter from "./api/users/index";
import {loadUsers} from "./usersData";
import crytosRouter from "./api/crytos/index";
import logger from "morgan";
import "babel-polyfill";

dotenv.config();

export const app = express();

const port = process.env.PORT;

app.use(logger(""));
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//app.use(passport.initialize());
app.use("/api/users", usersRouter);
app.use("/api/crytos", crytosRouter);
//app.use('/api/crytos', passport.authenticate('jwt', {session: false}), crytosRouter);

if (process.env.NODE_ENV === "test") {
    const mockgoose = new Mockgoose(mongoose);
    mockgoose.prepareStorage().then(() => {
        mongoose.connect(process.env.mongoDB);

    });
} else if (process.env.NODE_ENV === "production") {
    mongoose.connect(process.env.mongoDBProduction, function (err, db) {
        if (!err) {
            console.log("We are connected");
        } else {
            console.log(err)
        }
    });
}
else {
    mongoose.connect(process.env.mongoDB);
}

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error: " + err);
    process.exit(-1);
});

if (process.env.seedDb) {
    loadUsers();
    //loadCrytos()
}

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});
