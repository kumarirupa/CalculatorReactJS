import axios from 'axios';
const getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
const APIService = (method, url, data, callback) => {
  const config = {
      method: method.toLowerCase(),
      url,
      data,
  };
  const token = getCookie('Authorization');
  if(token) {
      config.headers = {
          Authorization: token
      }
  }
  console.log('data', data)
  axios(config)
      .then(function (response) {
          callback(null, response);
      })
      .catch(function (error) {
          callback(error);
      })
}
export default APIService;