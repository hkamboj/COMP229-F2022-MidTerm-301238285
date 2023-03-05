/**
 * filename: book.js
 * student name: Hardik Kamboj
 * student number: 301238285
 * Date: March 4 2023
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