/**
 * Contains list of APIs that are consumed by this application
 */


const baseURL = process.env && process.env.PROD_URL ? `${process.env.PROD_URL}/` : 'http://13.233.204.63:4000';

export const REGISTER_USER = `${baseURL}/register`;

