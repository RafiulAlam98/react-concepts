

const AddUser = () => {
const handleSubmitUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            id:11,
            name:"Rafiul Alam",
            email:"mrafiul.alam7@gmail.com",
            phone:"1345678",
            username:"rafi",
            website:"www.something.com",
            address:{
        
            },
            company:{
        
            },
        
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

    return (
        <div>
            <button onClick={handleSubmitUser} className="btn btn-primary">Add New User</button>
        </div>
    );
};

export default AddUser;


// fetch api call
// 