import { useEffect, useState } from "react";
import '../css/Users.css'
import User from "./User";

const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

    return (
        <div className="card-container">
            {
                users.map((user)=>(
                    <User key={user.id} user={user}></User>
                ))
            }
        </div>
    );
};

export default Users;