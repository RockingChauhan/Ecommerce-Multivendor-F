import axios from 'axios';

export const API_URL = "https://zt6nbjxt-5454.inc1.devtunnels.ms";

// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});