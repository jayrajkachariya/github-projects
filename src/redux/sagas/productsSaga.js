import { put, call, takeEvery } from 'redux-saga/effects';

import { setError, setProjects } from '../actions';
import { PROJECTS } from '../constants';
import { fetchData } from '../../api';

export function* handleLoadProjects() {
  try {
    const products = yield call(fetchData);
    yield put(setProjects(products));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchLoadProjects() {
  yield takeEvery(PROJECTS.LOAD, handleLoadProjects);
}
