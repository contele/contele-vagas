'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { deleteUserService } = require('../../services');

const deleteUserHandler = async (req, res, next) => {
    try{

        const {
            user_id
        } = req.query;

        const {
            deletedUser
        } = await deleteUserService({
            user_id
        })

        return res.status(httpStatusCodes.OK).send({deletedUser})
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    deleteUserHandler
}