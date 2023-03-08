const express=require('express')
var cors = require('cors')
const app=express()
const PORT=5000

app.use(cors())
app.use(express.json())
app.use(require('./routes/emails'))

app.listen(PORT,()=>{
  console.log("Server is running on",PORT)
})