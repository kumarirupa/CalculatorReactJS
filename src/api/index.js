/**
 * Contains list of APIs that are consumed by this application
 */


const baseURL = process.env && process.env.PROD_URL ? `${process.env.PROD_URL}/` : 'http://127.0.0.1:4000';

export const REGISTER_USER = `${baseURL}/register`;

export const LOGIN_USER = `${baseURL}/login`;

export const USER_DETAILS = `${baseURL}/userDetails`;

export const UPDATE_USER_DETAILS = `${baseURL}/userDetails`;

