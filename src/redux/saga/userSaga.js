import { call, put, takeEvery } from 'redux-saga/effects';

function getApi() {
  return fetch('/usuarios.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((myJson) => myJson.results)
    .catch((error) => {
      throw error;
    });
}

// eslint-disable-next-line no-unused-vars
function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: 'GET_USERS_SUCCESS', users: users });
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message });
  }
}

function* userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;
