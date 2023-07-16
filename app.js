const fs = require ("fs")
const per = {
fname: "Ahmed",
lname : "Hossam",
age : "20",
city : "Alex"
}
const perjson = JSON.stringify (per)
fs.writeFileSync( "data.json" , perjson )
console.log(fs.readFileSync("data.json"). toString())
const perobj = JSON.parse (perjson)
console.log(perobj)
perobj.fname = "adel"
perobj.lname = "Ahmed"
perobj.age = "40"
perobj.city = "cairo"
const perjson1 = JSON.stringify (perobj)
console.log(perjson1)
fs.writeFileSync( "data.json" , perjson1 )