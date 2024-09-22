import react ,{useEffect,useState} from 'react';

import { getUsers,creatUser,getUserByUsername } from '../services/userServices';

const UserList=()=>{
    const[users,setUsers]=useState([]);
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    });

    const [usernameSearch,setUsernameSearch]=useState('');
    const [userByUsername,setUserByUsername]=useState(null);
    const [errorMessage,setErrorMessage]=useState('');

    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers=async()=>{
        const response=await getUsers();
        setUsers(response.data);
    };

    const handleInputChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        setErrorMessage('');
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        await creatUser(formData);  
        setFormData({username:'',email:'',password:''});
        fetchUsers();
        setErrorMessage('');
        }catch(error){
           if(error.response && error.response.status === 400){
            setErrorMessage('Username already exits. Please choose a different one.')
           }else{
            console.error('Error cresting user:',error);
           }
        }
    };

    const handleUsenameSearchChange=(e)=>{
        setUsernameSearch(e.target.value);
    };

    const fetchUserByUsername = async ()=>{
        if(usernameSearch){
            try{
                const response=await getUserByUsername(usernameSearch);
                setUserByUsername(response);

            }catch(error){
                console.error("Error fecting user:",error);
            }

        }
    };

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map(user=>(
                        <li key={user.username}>{user.username} - {user.email}</li>
                    ))
                 ) : (
                    <li>No users found.</li>
                )}
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
                {errorMessage && (
                    <p style={{color:'red'}}>{errorMessage}</p>
                )}

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

            <h3>Search User By Username</h3>
            <input
             type="text"
             value={usernameSearch}
             onChange={handleUsenameSearchChange}
             placeholder="Enter Username"
            />

            <button onClick={fetchUserByUsername}>Get User</button>
            {userByUsername && (
                <div> 
                    <h4>User Details</h4>
                    <p>Username: {userByUsername.username}</p>
                    <p>Email: {userByUsername.email}</p>
                </div>
            )}
        </div>
    ); 
};

export default UserList;