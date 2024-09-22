import axios from 'axios';

const API_URL='http://localhost:8095/api/users';

export const getUsers=async ()=>{
    return await axios.get(API_URL);
}

export const creatUser = async (userData)=>{
    try{
        const response  = await axios.post(API_URL,userData);
        return response.data;
    }catch(error){
        console.error("Error creating user:",error);
        throw error;
    }
};