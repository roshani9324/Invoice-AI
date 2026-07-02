
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from './config/db.js';
import invoiceRouter from './routes/invoiceRouter.js';
import businessProfileRouter from './routes/businessProfileRouter.js';
import aiInvoiceRouter from './routes/aiInvoiceRouter.js';
import path from 'path'




const app=express();
const port =4000;

//Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware({limit: "20mb" }));
app.use(express.urlencoded({limit:"20mb", extended:true}));


//DB

connectDB();





//Routes
app.use('/uploads', express.static(path.join(process.cwd(),'uploads')));
 app.use('/api/invoice', invoiceRouter);
 app.use('/api/businessProfile', businessProfileRouter);
 app.use('/api/ai', aiInvoiceRouter);


app.get('/',(req,res)=>{
    res.send('API Working');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
   
})