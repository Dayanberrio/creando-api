import express from "express";
import Routes from "./routes/route.js";
import Cors from "cors";
const App = express();

App.use(express.json());
App.use(Cors());
App.use(Routes);


const port = 8000

App.listen (port, ()=>{
    console.log(`http://localhost:${port}`);
})