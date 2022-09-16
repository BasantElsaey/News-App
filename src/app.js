const {request,response} = require('express')
const express = require('express')
const app = express()
const reques = require ('request')
const path = require('path')
const port = process.env.PORT || 3000
const hbs = require('hbs')



const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-15&sortBy=publishedAt&apiKey=62de2907a9b5403d8e90d7c485337e73'
const apiKey = '62de2907a9b5403d8e90d7c485337e73'


const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
const viewsPath = path.join(__dirname,'../templates/views')



app.set('view engine','hbs');
console.log(__dirname)
app.set('views',viewsPath)




reques ({
    url, json:true,headers:{"User-Agent" : 'request'}
    
},(error,response)=>{
    if(error){
         console.log('Error has happened')
    }
    app.get('/',(req,res)=>{
        res.render('index',{
           news : response.body.articles
})

    })

})




app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})
