/**
 * Contains list of APIs that are consumed by this application
 */


const baseURL = process.env && process.env.PROD_URL ? `${process.env.PROD_URL}/` : 'http://3f78f594.ngrok.io';

export const REGISTER_USER = `${baseURL}/register`;

export const LOGIN_USER = `${baseURL}/login`;

export const USER_DETAILS = `${baseURL}/userDetails`;

export const UPDATE_USER_DETAILS = `${baseURL}/userDetails`;

export const GET_USER_PRIVACY_STATUS = `${baseURL}/getUserPrivacyStatus`;

export const SET_USER_PRIVACY_STATUS =  `${baseURL}/setPrivacyStatus`;

export const SEARCH_USER =  `${baseURL}/searchUser`;