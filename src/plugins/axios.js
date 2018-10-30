import Axios from 'axios';
import ChangeCaseObject from 'change-case-object';
import { API_URL } from 'constants';

const convertRequest = (requestObject) => {
  const objectData = requestObject.data;
  const objectParam = requestObject.params;
  const privateResponseObject = requestObject;

  privateResponseObject.data = ChangeCaseObject.camelCase(objectData);
  privateResponseObject.params = ChangeCaseObject.camelCase(objectParam);

  return requestObject;
};

const convertRequestError = (responseObject) => {
  const response = convertRequest(responseObject.response);
  return Promise.reject(response);
};

const convertResponse = (responseObject) => {
  const objectData = responseObject.data;
  // eslint-disable-next-line no-param-reassign
  responseObject.data = ChangeCaseObject.snakeCase(objectData);

  return responseObject;
};

const convertResponseError = (responseObject) => {
  const response = convertResponse(responseObject.response);
  return Promise.reject(response);
};

const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(request => convertRequest(request), error => convertRequestError(error));

axios.interceptors.response.use(response => convertResponse(response), error => convertResponseError(error));

export default axios;
