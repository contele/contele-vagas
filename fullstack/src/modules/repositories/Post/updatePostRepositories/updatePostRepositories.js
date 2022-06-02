const {
    getTransaction,
    commitTransaction,
    rollbackTransaction
} = require('../../../common/handlers')

const updatePostRepositories = async ({
    id,
    author_id,
    post_text
}) => {
    const { transaction } = await getTransaction();

    try {

        await transaction('posts').where({ id }).update({
            id,
            author_id,
            post_text
        })


    } catch (err) {
        rollbackTransaction({ transaction })
        throw new Error(err)
    }
}

module.exports = {
    updatePostRepositories
}