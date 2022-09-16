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














// const express = require ('express')
// const port = process.env.PORT || 3000
// app.use(express.static(publicDirectory))
// const path = require('path') // core module
// const app = express()
// const hbs = require('hbs')



// const publicDirectory = path.join(__dirname,'../public')
// const viewsPath = path.join(__dirname,'../templates/views')
// const partialsPath = path.join(__dirname,'../templates/partials')

// hbs.registerPartials = partialsPath

// const request = require('request')





// app.set('view engine','hbs');
// console.log(__dirname)
// app.set('views',viewsPath)

// const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-12&sortBy=publishedAt&apiKey=62de2907a9b5403d8e90d7c485337e73'

// request ({
//     url,
// })


// // request({url,json:true} ,(error,response) =>{
// //     // low level error --> internet connection / invalid link
// //     // const data = JSON.parse(response.body)
// //     // res.render({data:data})

// //     app.get("/", function (req, res) {
// //         var user = req.query.getValue;

// //  const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-12&sortBy=publishedAt&apiKey=62de2907a9b5403d8e90d7c485337e73' + user + "&apikey=..."

// //         request(url, function (error, response, body) {
// //             var data = JSON.parse(body);
// //             res.render("index", { data: data });

// //             if(error){
// //                 console.log(' Error has occurred ')
// //             }
            
// //             else if(response.body.error){
// //                console.log(response.body.error.message)
// //             }
// //           else{
// //             console.log(' Data here ')
// //           }
              
// //         });
// //     });
    
// //         })

// app.get('/',(req,res)=>{
//     res.render('index',{
//         title : 'Home Page from hbs',
//         name : 'Ahmed'
//     })

// })




// app.listen(port,() =>{
//     console.log(`Example app listening on port ${port}`)
// })



