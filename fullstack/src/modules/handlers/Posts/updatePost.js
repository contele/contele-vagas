'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { updatePostService } = require('../../services');

const updatePostHandler = async (req, res, next) => {
    try{
        const {
            id,
            author_id,
            post_text
        } = req.body

        const updated_post = await updatePostService({
            id,
            author_id,
            post_text
        })

        return res.status(httpStatusCodes.OK).send(updated_post);
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    updatePostHandler
}