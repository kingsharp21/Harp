import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

export async function  getArtises() {
      try {
        const response = await axios.get(`${baseURL}/api/artise`);
        return response.data;
      } catch (error) {
        return error;
      }
}

export async function  getouick() {
      try {
        const response = await axios.get(`${baseURL}/api/ouick`);
        return response.data;
      } catch (error) {
        return error;
      }
}

export async function getArtise(id:any) {
    try {
        const response = await axios.get(`${baseURL}/api/artise/${id}`)
    return response.data;
    } catch (error) {
        return error;
    }
}