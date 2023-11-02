import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function User(){
    const { id } =useParams();

    const [error,setError] =useState("");
    const [isLoaded,setIsLoaded] =useState(true);
    const [user,setUser] =useState([]);
    const [userCompany,setUserCompany] =useState([]);
    const [userAddress,setUserAddress] =useState([]);

    useEffect (()=>{
        fetch("http://jsonplaceholder.typicode.com/Posts/"+id)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                setUser(data);
                setIsLoaded(true);
                setUserCompany(data.company);
                setUserAddress(data.address);

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
        <h1>{user.userId}
        </h1>
        <div>Title: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div>Company: {userCompany.name}</div>
        <div>Address: {userAddress.street}, {userAddress.suite},{userAddress.city},{userAddress.zipcode}</div>
        </center>
        </>

    )
    }
}

export default User;