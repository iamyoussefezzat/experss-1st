const exprees = require('express')
const body= require('body-parser')

const app=exprees()

app.use(body.json())

let Users=[{name:"youssef", age: 20 },{name:"jo", age:255}] 

app.get('/users',function(req,res){
    res.json({Users:Users, mesage:"ok"})
})

app.post('/users', function(req,res){
    Users.push(req.body)
    res.json({message:"200", Users:req.body})
})


app.put('/users/:name' , function(req,res){

    let {name}=req.params

    Users.find((o,i)=>{
        if(o.name===name){
            Users[i]=req.body
        }
    })
    res.json({message:"done"})

})
app.delete('/users/:name' ,function(req,res){
    let {name}=req.params

    Users.find((o,i)=>{
        if(o.name===name){
            Users.splice(Users[i],1)
        }
    })

    res.json({message:"deleted"})
    
})














app.get('/',function(req,res){
    res.send("helxvxvxvlo")
})

app.listen(9988)