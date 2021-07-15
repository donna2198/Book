import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
   author: String,
    
})

var Book = mongoose.model('Book', bookSchema);

export default Book;

