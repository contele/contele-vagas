'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { 
    getPostByUserIdService 
} = require('../../services');

const listPostHandler = async (req, res, next) => {
    try{
        const {
            user_id
        } = req.query;
        
        const {
            posts
        } = await getPostByUserIdService({
            user_id
        })

        return res.status(httpStatusCodes.OK).send({posts});
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    listPostHandler
}