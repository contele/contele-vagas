const { getPostByPostIdRepositories, updatePostRepositories } = require("../../../repositories");

const updatePostService = async ({
    id,
    author_id,
    post_text
}) => {

    const {
        posts = []
    } = await getPostByPostIdRepositories({
        post_id: id
    });

    const has_post = Array.isArray(posts) && posts.length === 1;

    if (!has_post) {
        throw new Error("Hasn't post to update")
    }

    await updatePostRepositories({
        id,
        author_id,
        post_text
    })

    return {
        updatedpost: {
            id,
            author_id,
            post_text
        }
    };
}

module.exports = {
    updatePostService
}