const {
    getTransaction,
    commitTransaction,
    rollbackTransaction
} = require('../../../common/handlers')

const deleteUserRepositories = async ({
    user_id
}) => {
    const { transaction } = await getTransaction();

    try {
        await transaction('users').where({id: user_id}).del()

        await commitTransaction({transaction})
        
    } catch (err) {
        rollbackTransaction({transaction})
        throw new Error(err)
    }
}

module.exports = {
    deleteUserRepositories
}