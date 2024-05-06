const express  = require("express")
const app = express()
const path = require("path")
const cors = require('cors')
const PORT = process.env.PORT || 5000
const connection = require("./Config/configDB")
const routerApi = require("./Router/routeApi")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/Views'))
app.use(cors()) 
connection.connectMongoDB()

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/api', routerApi)
app.get('/',(req,res)=>{
    res.send(
        "<h1> cnpm</h1>" +
        "<h2><a href='/api/gym'>Api </a></h2>" 
    )
})
 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
