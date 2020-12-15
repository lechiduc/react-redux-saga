import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setPosts } from 'src/slices/posts';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=react';

const fetchPosts = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

function* fetchPostsSaga() {
  try {
    const result = yield call(fetchPosts, API_ENDPOINT);
    yield put(setPosts(result));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeLatest('FETCH_POSTS', fetchPostsSaga);
}
