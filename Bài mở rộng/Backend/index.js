const express = require ("express")
const app = express()
const port = 3000
const morgan = require("morgan")
app.use(morgan("combined"))
// create default API
app.get("/", (req,res)=> {
    res.send("Hello Restful API")
})
app.listen(port,()=>{
    console.log(`My server listening on port ${port}`)
})

const cors = require("cors")
app.use(cors())

let database=[
    {"FoodId":1,"FoodName":"Crumble","Price":466,"Image":"hinh1.jpg","ExpiredDate": "2019-10-03","Remark": 3},
    {"FoodId":2,"FoodName":"Bruschetta","Price":257,"Image":"hình2.jpg","ExpiredDate": "2023-11-26","Remark": 4},
    {"FoodId":3,"FoodName":"Kimbap","Price":513,"Image":"hinh3.jpg","ExpiredDate": "2019-10-11","Remark": 2},
    {"FoodId":4,"FoodName":"Nigiri","Price":580,"Image":"hinh4.jpg","ExpiredDate": "2021-10-02","Remark": 1},
    {"FoodId":5,"FoodName":"Pizza Margherita","Price":394,"Image":"hinh5.jpg","ExpiredDate": "2023-12-23","Remark": 3},
    {"FoodId":6,"FoodName":"Banchan","Price":307,"Image":"hinh6.jpg","ExpiredDate": "2024-10-17","Remark": 4},
    {"FoodId":7,"FoodName":"Pulled Pork","Price":395,"Image":"hinh7.jpg","ExpiredDate": "2020-12-14","Remark": 1},
    {"FoodId":8,"FoodName":"Frozen Yogurt","Price":357,"Image":"hinh8.jpg","ExpiredDate": "2017-03-24","Remark": 2},
    {"FoodId":9,"FoodName":"Churros","Price":414,"Image":"hinh9.jpg","ExpiredDate": "2021-12-28","Remark": 5},
    {"FoodId":10,"FoodName":"Macarons","Price":431,"Image":"hinh10.jpg","ExpiredDate": "2023-06-17","Remark": 5},
    {"FoodId":11,"FoodName":"Yakisoba","Price":497,"Image":"hinh11.jpg","ExpiredDate": "2024-04-19","Remark": 2},
    {"FoodId":12,"FoodName":"Miso Soup","Price":513,"Image":"hinh12.jpg","ExpiredDate": "2020-03-05","Remark": 2},
    {"FoodId":13,"FoodName":"Ravioli","Price":486,"Image":"hinh13.jpg","ExpiredDate": "2018-11-20","Remark": 4},
    {"FoodId":14,"FoodName":"Spring Rolls","Price":319,"Image":"hinh14.jpg","ExpiredDate": "2023-01-15","Remark": 3},
    {"FoodId":15,"FoodName":"Milkshake","Price":679,"Image":"hinh15.jpg","ExpiredDate": "2025-11-18","Remark": 5}

]

app.get("/foods",cors(),(req,res)=> {
    res.send(database)
})

app.get("/foods/:id",cors(), (req,res) =>{
    id = req.params["id"]
    let p = database.find(x=>x.FoodId==id)
    res.send(p)
})

app.get("/foods/:minMark/:minDate",cors(),(req,res)=>{
    // console.log(req.params.minMark, req.params.minDate)
    // minMark = 4
    // minDate = "03-30-2023"
    let p = database.filter (x=>x.Remark>= 4 && x.ExpiredDate >= "2023-03-30")
    // let p = database.filter (x=>x.Remark>= 4 && Date(x.ExpiredDate).getTime().toDateString() >= Date(minDate).getTime().toDateString())
    // let p = database.filter (x=>x.Remark>= 4 && function(date){
    //     var date = new Date(x.ExpiredDate)
    //     return date >= Date("2023-03-30")})
    res.send(p)
})
