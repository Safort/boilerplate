import request from '../utils/request';


export const GET_TEST_REQUEST = 'GET_TEST_REQUEST';
export const GET_TEST_SUCCESS = 'GET_TEST_SUCCESS';
export const GET_TEST_FAIL = 'GET_TEST_FAIL';

export function requestTest() {
  return { type: GET_TEST_REQUEST };
}

export function requestTestSuccess(current) {
  return { type: GET_TEST_SUCCESS, current };
}

export function requestTestFail(errors) {
  return { type: GET_TEST_FAIL, errors };
}

export function fetchTest(id) {
  return dispatch => {
    requestTest();
    request('GET', `http://localhost:8080/api/tests`)
    .then(current => dispatch(requestTestSuccess(current)))
    .catch(errors => dispatch(requestTestFail(errors)));
  };
}
