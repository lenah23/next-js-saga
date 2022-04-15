import postTypes from "../types/posts"

const getPosts = (payload) => {
    return {
        type: postTypes.GET_POSTS,
        payload
    }
}

const putPosts = (payload) => {
    return {
        type: postTypes.PUT_POSTS,
        payload
    }
}

const postActions = {
    getPosts,
    putPosts
}

export default postActions