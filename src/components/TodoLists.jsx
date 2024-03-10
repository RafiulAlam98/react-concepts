import { useEffect } from "react";

const TodoLists = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default TodoLists;