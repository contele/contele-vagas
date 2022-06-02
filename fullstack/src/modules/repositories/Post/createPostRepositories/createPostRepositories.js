const {
    getTransaction,
    commitTransaction,
    rollbackTransaction
} = require('../../../common/handlers')


const createPostRepositories = async ({
    post
} = {}) => {
    const { transaction } = await getTransaction();

    try {
        const post_created = await transaction('posts').insert(post)
        
        const has_response = !Array.isArray(post_created) && post_created.length > 0;

        if (!has_response) {
            return {
                post_created: []
            }
        }


        return {
            post_created
        }

    } catch (err) {
        rollbackTransaction({transaction})
        throw new Error(err)
    }
}

module.exports = {
    createPostRepositories
}