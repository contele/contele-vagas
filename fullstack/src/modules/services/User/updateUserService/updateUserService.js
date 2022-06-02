const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const { getUserRepositories, updateUserRepositories } = require("../../../repositories");

const updateUserService = async ({
    id,
    user_email,
    user_password,
    full_name
}) => {

    const {
        users = []
    } = await getUserRepositories({
        user_id: id
    });

    const has_user = Array.isArray(users) && users.length === 1;

    if (!has_user) {
        throw new Error("Missing user to update")
    }

    const [user_to_update] = users;

    const crypt_password = bcrypt.hashSync(user_to_update.user_password, salt);

    await updateUserRepositories({
        id,
        user_email,
        user_password: crypt_password,
        full_name
    })

    return {
        updatedUser: {
            id,
            user_email,
            user_password,
            full_name
        }
    };
}

module.exports = {
    updateUserService
}