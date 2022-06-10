const {
    getTransaction,
    commitTransaction,
    rollbackTransaction
} = require('../../../common/handlers')

const updateUserRepositories = async ({
    id,
    user_email,
    user_password,
    full_name
}) => {
    const { transaction } = await getTransaction();

    try {

        await transaction('users').update({
            user_email,
            user_password,
            full_name
        })

        await commitTransaction({ transaction })

    } catch (err) {
        rollbackTransaction({ transaction })
        throw new Error(err)
    }
}

module.exports = {
    updateUserRepositories
}