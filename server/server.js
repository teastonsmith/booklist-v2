const express = require('express')

const BooksIndex = require('./controllers/BooksIndex')

const app = express()
const port = 4444

app.use(express.json())

app.post('/api/index', BooksIndex.post)
app.get("/api/index", BooksIndex.get);
app.put("/api/index/:id", BooksIndex.put)
app.delete("/api/index/:id", BooksIndex.delete);

app.listen(port, () => {
    console.log('Now listening on port:', port)
})