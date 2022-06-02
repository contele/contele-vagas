module.exports = Object.freeze({
    ...require('./Posts/createPost.js'),
    ...require('./Posts/updatePost.js'),
    ...require('./Posts/listPost.js'),
    ...require('./Posts/deletePost.js'),
    ...require('./User/createUser.js'),
    ...require('./User/updateUser.js'),
    ...require('./User/listUsers.js'),
    ...require('./User/deleteUser.js')
})