import APIServices from '../services/APIServices';

const registerUser = (body, callback) => {
    APIServices('post', `/register`, body, callback);
};

export {
    register
};
