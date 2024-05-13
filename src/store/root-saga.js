import {all, call} from 'redux-saga/effects';
/*
all take an array of generator and invoke,
call use for calling a function
*/
import {
  courselistCollectionsStart,
} from './sagas/AppSagas';

export default function* rootSaga() {
  // run the array of generators that we invoke
  yield all([
    call(courselistCollectionsStart),
  ]);
}
