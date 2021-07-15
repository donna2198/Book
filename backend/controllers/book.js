import express from 'express';
import mongoose from 'mongoose';

import Book from '../models/Book.js';

const router = express.Router();

export const getBook = async (req, res) => { 
    try {
        const book = await Book.find();
                
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const createBook = async (req, res) => {
    const { title, author } = req.body;

    const newBook = new Book({ title, author })

    try {
        await newBook.save();

        res.status(201).json(newBook );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;

    const updatedPost = { title,author,_id: id };

    await Book.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    await Book.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;