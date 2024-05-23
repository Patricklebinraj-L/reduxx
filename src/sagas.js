import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from './actions.js';

// https://dummyjson.com/users    ===== Test API


function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://dummyjson.com/users');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}

export default rootSaga;
