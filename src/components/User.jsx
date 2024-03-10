/* eslint-disable react/prop-types */


const User = ({user}) => {
    const {username,name,phone, address, website, email,} =user
    return (
        <div className="cards">
        <h1>{username}</h1>
        <h2>{name}</h2>
        <h4>{phone}</h4>
    </div>
    );
};

export default User;