import axios from 'axios';

export const API_URL = "ecommerce-multivendor.railway.internal";

// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});