import { useEffect, useState, } from "react";
import '../css/Users.css'
import User from "./User";
import AddUser from "./AddUser";

const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))

    },[])


    return (
<>
<AddUser/>
<div className="card-container">
{
  users.map((user)=><User key={user.id} user={user}/>)
}
</div>
</>
    );
};

export default Users;