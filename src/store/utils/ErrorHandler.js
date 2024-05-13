import {store} from "../index"

function errorHandler(err,payload) {
  if (err.response) {
    // client received an error response (5xx, 4xx)
    console.log(err.response.data.error,"jwtresponse")
    if(err.response.data.error || err.data.error === "jwt expired"){
      console.log("payloaderror",payload)
    }
    console.log(err,'errorhandleresponsessss')
    return err.response || err;
  } else if (err.request) {
    console.log(err.request, 'err.request');
    // client never received a response, or request never left
    return {
      status: 400,
      data: {
        error: 'The request timed out.',
      },
    };
  } else {
    // anything else
    console.log(err, 'err');
    return err;
  }
}
export default errorHandler;
