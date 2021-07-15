import express from 'express';

import { getBook, createBook, updateBook, deleteBook } from '../controllers/book.js';

const router = express.Router();

router.get('/', getBook);
router.post('/', createBook);

router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);


export default router;