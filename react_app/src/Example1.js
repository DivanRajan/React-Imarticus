//Creating a functional component and add a state in that
import React, { useState } from 'react';

function Example1(){
    const [count,setCount]=useState(0);
    function handleEvent(){
        setCount(count+1);
    }
    function doubleEvent(){
        setCount(count+2);
    }
    return(
        <div>
    <h1>Welcome to functional Component</h1>
        <h2>Imarticus Learning</h2>
        <h2>Count = {count}</h2>
        <h3>Count = {count+1}</h3>
        <button onClick={handleEvent}>Click here</button> <br/>
        <br />
        <button onClick={doubleEvent}>Double Count</button>
        </div>
    );
}

export default Example1;