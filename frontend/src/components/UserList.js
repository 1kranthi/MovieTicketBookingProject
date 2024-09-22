import react ,{useEffect,useState} from 'react';

import { getUsers,creatUser } from '../services/userServices';

const UserList=()=>{
    const[users,setUsers]=useState([]);
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    });

    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers=async()=>{
        const response=await getUsers();
        setUsers(response.data);
    };

    const handleInputChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await creatUser(formData);
        fetchUsers();
    };

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.username}-{user.email}</li>
                ))}
            </ul>

            <h3> Add New User</h3>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="username"
                 placeholder="Username"
                 value={formData.username}
                 onChange={handleInputChange}
                />

                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    ); 
};

export default UserList;