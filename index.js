const { faker }= require("@faker-js/faker") ;
const mysql=require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  database: "connect",
  password:"root"
});

let createRandomUser= ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password()
    ]
}

// let users=[];
// for(let i=0;i<100;i++){
//   users.push(createRandomUser());
// }

// let q="INSERT INTO user VALUES ?";
// try{
//   connection.query(q,[users],(err,res)=>{
//     console.log(res);
//   })
// }
// catch(err){
//   console.log(err);
// }

// connection.end();

let port=8080;
app.listen(port,()=>{
  console.log("listening the port suceesfully");
}); 

app.get("/",(req,res)=>{
  res.send("page is working successfully");
})

//get users list
app.get("/users",(req,res)=>{
  let q="SELECT * from user";
  try{
    connection.query(q,(err,result)=>{
      res.render("show.ejs",{result});
    })
  }
  catch(err){
    console.log(err);
  }
})

// //edit username
// app.get("/users/:id",(req,res)=>{
//   let {id}=req.params;
//   let q=`select * from user where id='${id}'`;
//   try{
//     connection.query(q,(err,result)=>{
//       if(result.length==0){
//         res.status(404).send("user not found");
//       }
//       res.render("edit.ejs",{result: result[0]});
//     })
//   }
//   catch(err){
//     console.log(err);
//     res.send(err);
//   }
// })

// app.patch("/users/:id/edit",(req,res)=>{
//   let {id}=req.params;
//   let {usr,pass}=req.body;
//   let q=`SELECT * FROM user WHERE id='${id}'`;
//   try{
//     connection.query(q,(err,user)=>{
//       if(user[0].password!=pass){
//         res.send("wrong password");
//       }
//       else{
//         try{
//           let q1=`update user set username='${usr}' where id='${id}'`;
//           connection.query(q1,(err,response)=>{
//             res.redirect("/users");
//           })
//         }
//         catch(err){
//           res.send(err);
//         }
//       }
//     })
//   }
//   catch(err){
//     console.log(err);
//     res.send(err);
//   }
// })

//add user

app.get("/users/add",(req,res)=>{
  res.render("add.ejs");
})

app.post("/users/add",(req,res)=>{
  let id=uuidv4();
  let { username,email,password }=req.body;
  
  let q="INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
  try{
    connection.query(q,[id,username,email,password],(err,result)=>{
      res.redirect("/users");
    })
  }
  catch(err){
    res.send(err);
  }
})