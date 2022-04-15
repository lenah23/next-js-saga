import { all } from 'redux-saga/effects';
import { WatchGetPosts } from './postsSaga';

function* rootSaga() {
    yield all([
        WatchGetPosts()
    ])
}

export default rootSaga