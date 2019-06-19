import { all } from 'redux-saga/effects';

import projectsSaga from './productsSaga';

export default function* rootSaga() {
  yield all([projectsSaga()]);
}
