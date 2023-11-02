import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PostUser(){
    const { id } =useParams();

    const [error,setError] =useState("");
    const [isLoaded,setIsLoaded] =useState(true);
    const [user,setUser] =useState([]);
    const [userTitle,setUserTitle] =useState([]);
    const [userBody,setUserBody] =useState([]);

    useEffect (()=>{
        fetch("http://jsonplaceholder.typicode.com/posts/"+id)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                setUser(data);
                setIsLoaded(true);
                setUserTitle(data.title);
                setUserBody(data.body);

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    if(!isLoaded){
        return<div>Loading...</div>
    }
    if(user){
    return(
        <><center>
        <h1>Id:{id}</h1>
        <div>UserId: {user.userId}</div>
        <div>Title: {userTitle}</div>
        <div>Body: {userBody}</div>
        </center>
        </>
    )
    }
}

export default PostUser;