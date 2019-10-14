/**
 * Contains list of APIs that are consumed by this application
 */


const baseURL = process.env && process.env.PROD_URL ? `${process.env.PROD_URL}/` : 'http://13.233.204.63:8000';

export const REGISTER_USER = `${baseURL}/register`;

export const LOGIN_USER = `${baseURL}/login`;

export const USER_DETAILS = `${baseURL}/userDetails`;

export const UPDATE_USER_DETAILS = `${baseURL}/userDetails`;

export const GET_USER_PRIVACY_STATUS = `${baseURL}/getUserPrivacyStatus`;

export const SET_USER_PRIVACY_STATUS =  `${baseURL}/setPrivacyStatus`;

export const SEARCH_USER =  `${baseURL}/searchUser`;

export const CREATE_CHANNEL =  `${baseURL}/createChannel`;

export const GET_CHANNEL_LIST =  `${baseURL}/getHomeChannels`;

export const GET_BLOCK_USER = `${baseURL}/getBlockedUser`;
