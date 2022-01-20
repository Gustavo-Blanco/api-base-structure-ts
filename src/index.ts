import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import api from './router/api'
import { env } from "./config";

const app = express();
//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
console.log(process.env.DATABASE_URL);

//routes
app.use("/api/v1", api);

app.listen(env.PORT, () => console.log(`Listen on port ${env.PORT}`));
