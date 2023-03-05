let mongoose = require('mongoose');

// create a model class

/**
 * add your code to 
 * create your model here
 * 
 */

/**Pradyumna Donekal
 ID: 301145218
 26/06/21  */
 let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', bookModel);