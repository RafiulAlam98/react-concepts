/* eslint-disable react/prop-types */
import '../css/Users.css'


const User = ({user}) => {
    const {username,name,phone} = user
    console.log(user)
    return (
        <div className="cards" >
        <h1>{username}</h1>
        <h2>{name}</h2>
        <h4>{phone}</h4>
    </div>
    );
};

export default User;

// step 1= data fetch
// step 2= data store useState
// traverse
// single object --> website view
// different component

