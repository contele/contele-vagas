const { 
    client
} = require('../../../common/handlers')


const getUsersRepositories = async () => {

    const response = await client('users')
    
    const has_response = Array.isArray(response) && response.length > 0;

    if(!has_response){
        return {
            users: []
        }
    }

    return {
        users: response
    }

}

module.exports = {
    getUsersRepositories
}