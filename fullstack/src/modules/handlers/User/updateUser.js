'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { updateUserService } = require('../../services');

const updateUserHandler = async (req, res, next) => {
    try{
        const {
            id,
            user_email,
            user_password,
            full_name
        } = req.body

        const updated_user = await updateUserService({
            id,
            user_email,
            user_password,
            full_name
        })

        return res.status(httpStatusCodes.OK).send(updated_user);
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    updateUserHandler
}