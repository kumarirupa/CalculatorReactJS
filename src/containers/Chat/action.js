import {
    SEARCHING_USER
} from '../../actions/actionTypes';
import { SEARCH_USER } from '../../api'
import APIService from "../../services/APIServices";

export const searchUserData = username => dispatch =>{
    return  new Promise((resolve,reject)=>{
        dispatch(searchUserLoader(true));
            APIService("GET", `${SEARCH_USER}/${username}`, null, function(err, res) {
            if (err) {
                dispatch(searchUserLoader(false));
                reject(err);
            } else {
                dispatch(searchUserLoader(false));
                let userList = [];
                if(res.data.result !== null) {
                    userList = res.data.result.map(user => {
                        let firstName = user.firstName;
                        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                        let lastName = user.lastName;
                        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
                        return {
                            label:`${firstName} ${lastName}`, value: user.id
                        }
                    });
                }
                console.log(userList);
                resolve(userList);
            }
        });
    });
}

const searchUserLoader = payload => {
    return {
        type: SEARCHING_USER,
        payload
    };
}
