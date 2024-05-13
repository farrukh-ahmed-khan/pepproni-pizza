import ActionTypes, {SUCCESS, PROGRESS, FAILED, CLEAR} from '../../types/AppTypes';



const courseListStart = (data) => {
  return {
    type: ActionTypes.COURSE_LIST + PROGRESS,
    payload: data,
  };
};
const courseListSuccess = (data) => (
  console.log("courseListSuccess",data),
  {
  type: ActionTypes.COURSE_LIST + SUCCESS,
  payload: data,
});
const courseListFailure = (error) => ({
  type: ActionTypes.COURSE_LIST + FAILED,
  error,
});


export {
  courseListStart,
  courseListSuccess,
  courseListFailure,
};

export default Object({
  courseListStart,
  courseListSuccess,
  courseListFailure,
});
