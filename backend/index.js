import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import config from'./config.js';
import bookRoutes from './routes/book.js';
import userRoutes from './routes/auth.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/book', bookRoutes);
app.use('/user', userRoutes);
//var config = require('./config');

 
// connect to mongoDB 
mongoose.connect(config.dbUrl,{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});
app.listen(5000); 



