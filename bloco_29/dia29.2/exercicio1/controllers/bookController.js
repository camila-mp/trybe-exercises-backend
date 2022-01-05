const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books); 

  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado.' });
  };
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookById = await Book.findByPk(id);
    if (!bookById) {
      return res.status(404).json({ message: 'Not found.' });
    }

    return res.status(200).json(bookById);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
})