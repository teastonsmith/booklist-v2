let booksIndex = [
    {
        id: '',
        name: '',
        genre: '',
        pages: '',
        linkSrc: ''
    },
    {
        id: '',
        name: '',
        genre: '',
        pages: '',
        linkSrc: ''
    }
]


module.exports = {
    get: (req,res) => {
        res.send(booksIndex)
    }
}