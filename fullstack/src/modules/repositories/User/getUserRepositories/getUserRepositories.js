const { 
    client
} = require('../../../common/handlers')


const getUserRepositories = async ({
    user_id
} = {}) => {

    const {
        response
    } = await client('users').where({ id: user_id })

    const has_response = Array.isArray(response) && response.length > 0;

    if(!has_response){
        return {
            users: []
        }
    }

    // return {
    //     users: response
    // }
    return undefined;

}

module.exports = {
    getUserRepositories
}