const express = require('express')
const cors = require('cors')
const db = require('./app/models')

const app = express()

const corsOptions = {
    origin: "*"
}

// Register cors middleware
app.use(cors(corsOptions))
app.use(express.json())

// const mongooseConfig = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// Database Connection
db.mongoose.connect(db.url)
    .then(()=>console.log("database connected"))
    .catch(err=>{
        console.log(`Connection failed ${err.message}`)
        process.exit()
    })


// Call mahasiswa routes
require('./app/routes/mahasiswa.routes')(app)

const PORT = process.env.port || 8000
app.listen(PORT, ()=>{
    console.log(`app listening at http://localhost:${PORT}`)
})