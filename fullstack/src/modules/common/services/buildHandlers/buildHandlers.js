'use strict'

const {
    listUserHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
    listPostHandler,
    createPostHandler,
    updatePostHandler,
    deletePostHandler
} = require('../../../handlers')

const buildHandlers = () => {
    return {
        handlers: {
            listUserHandler,
            createUserHandler,
            updateUserHandler,
            deleteUserHandler,
            listPostHandler,
            createPostHandler,
            updatePostHandler,
            deletePostHandler
        }
    }
}

module.exports = {
    buildHandlers
}