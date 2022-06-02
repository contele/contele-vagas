const {
    getTransaction,
    commitTransaction,
    rollbackTransaction
} = require('../../../common/handlers')


const createUserRepositories = async ({
    user
} = {}) => {
    const { transaction } = await getTransaction();

    try {
        const {
            user_created
        } = await transaction('users').insert(user)
        
        const has_response = Array.isArray(user_created) && user_created.length > 0;

        if (!has_response) {
            return {
                user_created: []
            }
        }

        await commitTransaction({transaction})

        return {
            user_created
        }

    } catch (err) {
        rollbackTransaction({transaction})
        throw new Error(err)
    }
}

module.exports = {
    createUserRepositories
}