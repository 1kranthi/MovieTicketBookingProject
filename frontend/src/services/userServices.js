import axios from 'axios';

const API_URL='http://localhost:8095/api/users';

//To fetch all the Users
export const getUsers=async ()=>{
    try{
        const response=await axios.get(API_URL)
        return response;
    }catch(error){
        console.error("Error fetching users:",error);
        throw error;
    }
};

//In order to create new user
export const creatUser = async (userData)=>{
    try{
        const response  = await axios.post(API_URL,userData);
        return response.data;
    }catch(error){
        console.error("Error creating user:",error);
        throw error;
    }
};

//to fetch user info bu username

export const getUserByUsername=async(username)=>{
       try{
        const response=await axios.get(`${API_URL}/username/${username}`);
         return response.data;
       }catch(error){
         console.error(`Error fetching user by username ${username}`,error);
         throw error;
       }
};