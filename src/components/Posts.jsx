import { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>You get All post here</h1>
      
    </div>
  );
};

export default Posts;
