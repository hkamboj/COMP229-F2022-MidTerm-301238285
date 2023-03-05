/**
 * filename: book.js
 * student name: Marc Louis Gene De Guzman
 * student number: 301171014
 * Date: June 21, 2021
 */

let mongoose = require('mongoose');

// create a model class

let bookModel = mongoose.Schema(
    {
        name: String,
        author: String,
        published: String,
        description: String,
        price: Number
    }, 
    {
        "collection" : "books" // db.books
    });

module.exports = mongoose.model('Book', bookModel);