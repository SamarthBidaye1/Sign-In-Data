import axios from "axios";

const BASE_API = 'http://localhost:3000/app';

export const signUser = async (userdata) => {
  try {
    const res = await axios.post(`${BASE_API}/signin`, userdata);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Something went wrong' };
  }
};