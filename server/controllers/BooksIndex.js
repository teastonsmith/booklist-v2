let id = 1

let index = [
  {
    id: id++,
    title: "The War of the Worlds",
    author: "H.G. Wells",
    genre: "Science Fiction",
    pages: 192,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/The_War_of_the_Worlds_first_edition.jpg"
  },
  {
    id: id++,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Young Adult",
    pages: 277,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg"
  },
  {
    id: id++,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    genre: "Historical Fiction",
    pages: 275,
    imageUrl: "https://images.gr-assets.com/books/1440319389l/4981.jpg"
  },
  {
    id: id++,
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    genre: "Dystopian Science Fiction",
    pages: 192,
    imageUrl: "https://images.gr-assets.com/books/1348339306l/227463.jpg"
  },
  {
    id: id++,
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    genre: "Young Adult",
    pages: 734,
    imageUrl: "https://images.gr-assets.com/books/1361482611l/6.jpg"
  }
];


module.exports = {
    post: (req, res) => {
        let { title, author, genre, pages, imageUrl } = req.body

        let book = {
            id: id++,
            title,
            author,
            genre,
            pages: Number(pages),
            imageUrl
        }

        index.push(book)
        res.send(index)
    },

    get: (req,res) => {
        res.send(index)
    },

    put: (req, res) => { 
        let { title, author, genre, pages, imageUrl } = req.body;

        let updatedBook = {
          id: req.params.id,
          title,
          author,
          genre,
          pages: Number(pages),
          imageUrl
        };

        let i = books.findIndex(book => Number(book.id) === Number(req.params.id))

        index.splice(i, 1, updatedBook)
        res.send(index)
    },
    
    delete: (req, res) => {
        let { id } = req.params

        let i = index.findIndex(book => Number(book.id) === Number(id))
        index.splice(i, 1)
        res.send(index)
    }

}