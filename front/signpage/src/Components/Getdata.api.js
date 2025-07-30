import axios from "axios";

const BASE_API='http://localhost:3000/app';

export const getdata=async()=>{
    try {
        const res=await axios.get(`${BASE_API}/getdata`);
        return res.data;
    } catch (error) {
        throw error.response?.data || { message: 'Something went wrong' };
    }
}