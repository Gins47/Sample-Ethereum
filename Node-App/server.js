
const express = require('express')
const cors =  require('cors')

const app = express()
const port =  5000


app.use(cors())
app.use(express.json())

const ethereumRoute = require('./routes/ethereum')

app.use('/ethereum',ethereumRoute)


app.listen(port,() =>{
    console.log(`Server is running on the port ${port}`)
})