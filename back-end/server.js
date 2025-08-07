import express from "express";
import dotenv from 'dotenv';
import chalk from "chalk";
import cors from 'cors';
import {indexRoute} from "./api/v1/index.js";
import { Error404 } from "./utils/middlewares/404.js";
import { createConnection } from "./utils/db/connection.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api/v1', indexRoute);
app.use(Error404);

const PORT = process.env.PORT || 5000;


const promise = createConnection();
promise.then(()=>{
    // DB connection successful
    const server = app.listen(PORT, (err)=>{
    if(err){
        // Log server crash error
        console.log(chalk.redBright.italic('Server Crash ') + err + '\n');
    }
    else{
        // Log server start success
        console.log(chalk.greenBright.bold('Server Up and Running ') + server.address().port + '\n');
    }
})
}).catch(err=>{
    // Log database connection error
        console.log(chalk.redBright.bold('DB Crash......... ') + err + '\n');
})