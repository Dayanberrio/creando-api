import { Router } from "express";

const Routes = Router();

Routes.get("/",(req,res)=>{
        res.json({"content" : "hello"});
})



//parametros de la ruta
Routes.get("/home/:name",(req,res)=>{
    const nombre = req.params.name
    res.send(`Hello ${nombre}`);
})
//query de la route
Routes.get("/products/:nombre",(req,res)=>{
    const id = req.params.product
    res.send(`product ${id}`);
})
 // body de la ruta

 Routes.post("/products", (req,res)=>{
    const { nombre, precio } = req.body
    res.send(`products ${nombre} creado con precio ${nombre} `);
})


export default Routes;

