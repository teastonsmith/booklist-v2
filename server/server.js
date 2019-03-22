const express = require('express')

const app = express()
const port = 4444

app.use(express.json())


app.listen(port, () => {
    console.log('Now listening on port:', port)
})