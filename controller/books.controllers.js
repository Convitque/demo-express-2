const Book = require('../database/schema/books');

module.exports.index = async (req, res) => {
  await Book.find().then((Books) => {
    res.render('books/index', {
      Books,
    });
  });
};

module.exports.add = (req, res) => {
  res.render('books/add');
};

module.exports.POSTadd = (req, res) => {
  // books.push(req.body);
  const book = new Book({
    name: req.body.name,
    price: req.body.price,
  });
  book.save();
  res.redirect('/books');
};
