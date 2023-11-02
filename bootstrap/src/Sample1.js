import React,{useState} from "react";

function Sample1(){
    const[name,name1]=useState('Vinod');

    return(
        <div>
            <h1>{name}</h1>
            <button type="button" onClick={()=>name1('Manoj')}>Name1</button>
            <button type="button" onClick={()=>name1('Priya')}>Name2</button>
            <button type="button" onClick={()=>name1('Joseph')}>Name3</button>
        </div>
    )
}

export default Sample1;