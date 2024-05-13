import axios from 'axios';
import BarrierAuth from '../../utils/BarrierAuth';
import errorHandler from '../../utils/ErrorHandler';
import {store} from "../../index"

// const apiKey = process.env.REACT_APP_API_KEY;
// const apiUrl = process.env.REACT_APP_API_URL;

// console.log(`API Key: ${apiKey}`);
// console.log(`API URL: ${apiUrl}`);


async function courseList({payload}) {
  console.log('payloadpdfpdf', payload);
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`);
    return result;
  } catch (err) {
    return errorHandler(err);
  }
}
export {
  courseList,

};
