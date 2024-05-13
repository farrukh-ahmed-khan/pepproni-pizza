import ActionTypes, { SUCCESS, PROGRESS, FAILED, CLEAR } from '../../types/AppTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { courseList } from '../../Api/AppApi';

let INITIAL_STATE = {
  isProgress: false,
  isError: false,
  errorText: '',
  message: '',
  courseLists:null,
};
function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
   
    case ActionTypes.COURSE_LIST + PROGRESS:
      console.log("helllooooo red",action)
      return {
        ...state,
        // isProgress: true,
        // isError: false,
        // errorText: '',
      };
    case ActionTypes.COURSE_LIST + SUCCESS:
      console.log("helllooooo sssssss title",action.payload.data)
      return {
        ...state,
        // isProgress: false,
        // isError: false,
        // errorText: '',
        courseLists: action.payload.data,
      };

    case ActionTypes.COURSE_LIST + FAILED:
      console.log("helllooooo ffff",action)
      return {
        ...state,
        // isProgress: false,
        // isError: true,
        // errorText: action,
      };

  }
}
const persistConfig = {
  key: 'appReducer',
  storage,
  blacklist: ['isProgress', 'isError', 'errorText', 'message'],
  whitelist: [""],
};

export default persistReducer(persistConfig, appReducer);
