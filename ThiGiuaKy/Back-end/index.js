
//K204060288_Bùi Nguyễn Bích Ngọc_K20406

const express = require ("express")
const app = express()
const port = 3000
const morgan = require("morgan")
app.use(morgan("combined"))
const bodyParser = require("body-parser")
app.use(bodyParser.json())
// create default API
app.get("/", (req,res)=> {
    res.send("Hello Restful API")
})
app.listen(port,()=>{
    console.log(`My server listening on port ${port}`)
})

const cors = require("cors")
app.use(cors())

let database =[
    {"id":"h1","name":"James","gender":"Male","img":"1.jpg","birth":"17/03/1997"},
    {"id":"h2","name":"Liam","gender":"Male","img":"2.jpg","birth":"09/08/1984"},
    {"id":"h3","name":"Kelly","gender":"Female","img":"3.jpg","birth":"15/05/1995"},
    {"id":"h4","name":"Timmy","gender":"Male","img":"4.jpg","birth":"23/10/1999"},
    {"id":"h5","name":"Christina","gender":"Female","img":"5.jpg","birth":"29/11/1992"}
]

app.get("/customers",cors(),(req,res)=>{
    res.send(database)
})

app.post("/customers",cors(),(req,res)=>{
    //put json book into database
    database.push(req.body);
    //send message to client (send all database to client)
    res.send(database)
})

app.put("/customers",cors(),(req,res)=>{
    customer=database.find(x=>x.id==req.body.id)
    if (customer!=null){
        customer.name=req.body.name
        customer.gender=req.body.gender
        customer.img=req.body.img
        customer.birth=req.body.birth
    }
    res.send(database)
})

app.delete("/customers/:id",cors(),(req,res)=>{
    id=req.params["id"]
    database=database.filter(x=> x.id !== id);
    res.send(database)
})

app.get("/customers/:id", cors(),(req,res)=>{
    id=req.params["id"]
    let p=database.find(x=>x.id==id)
    res.send(p)
})

app.get("/customers/:female",cors(),(req,res)=>{
    let p = database.filter(x=> x.gender === "Female");
    res.send(p)
})