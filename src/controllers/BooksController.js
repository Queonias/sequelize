const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {

  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' }); 

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });

  res.status(201).json(book);
}

const update = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;

  const updateUser = await BookService.update(id, { title, author, pageQuantity });

  if (!updateUser) return res.status(404).json({ message: 'Book not found' });

  res.status(201).json({ message: 'Book update' });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};