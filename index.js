const express = require("express")
const app = express()
// const rockstar_routes = require('./routes/rockstarRoutes')
const {render} = require('ejs')
app.set('view engine','ejs')
// app.use(rockstar_routes)
// app.use()
app.listen(3000,()=>{
    try{
        console.log('server init')
    }catch(err){
        console.log(err)
    }
})
app.get('/',(req,res)=>{
    res.render('root')
})

let rotas = ['downloads','store','videos','suport','newwire']
app.get('/videos',(req,res)=>{
    res.render('videos')
})
app.get('/downloads',(req,res)=>{
    res.render("downloads")
})
app.get('/store',(req,res)=>{
    res.render("store")
})
app.get('/suport',(req,res)=>{
    res.render("suport")
})
app.get('/newwire',(req,res)=>{
    res.render("newwire")
})
app.use((req,res)=>{
    res.status(404).render('404')
})

