'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { createUserService } = require('../../services');

const createUserHandler = (req, res, next) => {
    try{
        const {
            user_email,
            user_password,
            full_name
        } = req.body

        const created_user = createUserService({
            user_email,
            user_password,
            full_name
        })

        return res.status(httpStatusCodes.OK).send(created_user);
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    createUserHandler
}