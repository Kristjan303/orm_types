import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import stringsController from "./controllers/strings";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";

const app: Express = express();
app.use(express.json());

mongoose.connect("mongodb+srv://kristjan303:01kristjan@cluster0.jpnu0zp.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', articleController);
app.use('/', commentController);



app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
