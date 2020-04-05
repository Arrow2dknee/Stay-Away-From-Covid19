import { call, put, takeEvery, all, fork} from 'redux-saga/effects';
import { apiRequestCompleted } from '../action/action';
import { actionIds } from '../action-types/action-types';

export function* fetchApiDetails() {
  yield takeEvery(
    actionIds.API_REQUEST_START,
    requestApi
  );
}

function* requestApi() {
  const fetchedData = yield call('https://api.covid19india.org/data.json');
  yield put(apiRequestCompleted(fetchedData));
}

export const rootSaga = function* root() {
    yield all([fork(fetchApiDetails)]);
  };
