/* call use for invoke function
takeEvery use for every dispatch action 
put use for dispatch a action function
takeLatest use for latest dispatch action
*/

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  courseListStart,
  courseListSuccess,
  courseListFailure,
} from '../../actions/AppActions';
import {
  courseList,
} from '../../Api/AppApi';
import ActionTypes, { PROGRESS } from '../../types/AppTypes';

export function* courselistCollectionsAsync(payload) {
  try {
    const response = yield courseList(payload);
    if (response.status === 200) {
      yield put(courseListSuccess(response));
    } else if (response.status >= 400 || response.status <= 499) {
      yield put(courseListFailure(response));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* courselistCollectionsStart() {
  yield takeLatest(
    ActionTypes.COURSE_LIST + PROGRESS,
    courselistCollectionsAsync,
  );
}
