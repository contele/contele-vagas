const {
    getTransaction,
    commitTransaction,
    rollbackTransaction
} = require('../../../common/handlers')

const deletePostRepositories = async (
    post_id
) => {
    const { transaction } = await getTransaction();

    try {
        await transaction('posts').del()

        await commitTransaction({transaction})
        
    } catch (err) {
        rollbackTransaction({transaction})
        throw new Error(err)
    }
}

module.exports = {
    deletePostRepositories
}