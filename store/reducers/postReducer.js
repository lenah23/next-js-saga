import postTypes from "../types/posts"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    posts: [],
    singlePost: []
}

export default function postReducer(state = initialState, action) {
    console.log(action, 'payload');
    switch (action.type) {
        case HYDRATE:
            console.log(state, 'state')
            console.log(action.payload, 'payload')
            return {
                ...state,
                ...action.payload.posts
            };
        case postTypes.PUT_POSTS:
            return {
                ...state,
                // posts: [
                ...action.payload
                // ]
            }
        default: return state
    }
}


