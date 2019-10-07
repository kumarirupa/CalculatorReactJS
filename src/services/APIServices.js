import axios from 'axios';

const APIService = (method, url, data, callback) => {

    const config = {
        method: method.toLowerCase(),
        url,
        data
    };
    console.log(`API ${method} Config::`, config);
    axios(config)
        .then(function (response) {
            console.log(`API ${method} Response::`, response);
            callback(null, response);
        })
        .catch(function (error) {
            console.log(`API ${method} Error::`, error.response);
            callback(error);
        })
}


export default APIService;
