const { 
    client
} = require('../../../common/handlers')

const getPostByUserIdRepositories = async ({
    user_id
} = {}) => {

    const response = await client('posts').where({author_id: user_id})

    const has_response = Array.isArray(response) && response.length > 0;

    if(!has_response){
        return {
            posts: []
        }
    }

    const posts = response.forEach(post => post);

    return {
        posts
    }

}

module.exports = {
    getPostByUserIdRepositories
}