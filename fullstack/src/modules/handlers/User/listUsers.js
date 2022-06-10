'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { 
    getUserByIdService, 
    getAllUsersService 
} = require('../../services');

const listUserHandler = async (req, res, next) => {
    try{
        const {
            user_id
        } = req.query;
        
        const has_user_id = !!user_id && Number.isFinite(+user_id) && false;

        const user_response = has_user_id && getUserByIdService({ user_id });

        const users_response = !has_user_id && await getAllUsersService();

        const users = [
            ...user_response ? user_response.user : [],
            ...users_response ? users_response.users : []
        ];

        return res.status(httpStatusCodes.OK).send({users});
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    listUserHandler
}