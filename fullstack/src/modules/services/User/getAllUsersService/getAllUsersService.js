const { getUsersRepositories } = require("../../../repositories");

const getAllUsersService = async () => {

    const {
        users = []
    } = await getUsersRepositories();

    const has_multiple_user = Array.isArray(users) && users.length > 0;

    return {
        users,
        has_multiple_user
    };
}

module.exports = {
    getAllUsersService
}