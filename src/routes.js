const {
    addNewBooks,
    getBooks,
    getBooksById,
    updateBooks,
    deleteBooks,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNewBooks,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getBooks,
    },

    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksById,
    },

    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBooks,
    },

    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBooks,
    },

];

module.exports = routes;
