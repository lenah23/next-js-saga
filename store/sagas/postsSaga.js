import { put, takeEvery } from 'redux-saga/effects';
import postTypes from "../types/posts";
import postActions from '../actions/postsActions';

function* getPosts() {
    try {
        const data = yield fetch("http://localhost:4200/posts").then((response) => response.json())

        console.log(data, 'fetch response');

        yield put(postActions.putPosts(data))
    }
    catch (error) {
        console.log(error);
    }
}

export function* WatchGetPosts() {
    yield takeEvery(postTypes.GET_POSTS, getPosts)
}
