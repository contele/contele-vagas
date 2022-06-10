'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { createPostService } = require('../../services');

const createPostHandler = async(req, res, next) => {
    try{
        const {
            post_text,
            author_id
        } = req.body

        const created_post = await createPostService({
            post_text,
            author_id
        })

        return res.status(httpStatusCodes.OK).send(created_post);
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    createPostHandler
}