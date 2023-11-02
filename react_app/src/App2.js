import React,{useState} from "react";
function App2(){
    const [data,setData]=useState({
        test:"Nil",
        questions:0,
        students:0
    });

    function handleEvent(){
        setData({
            test: "Programming Quiz",
            questions:10,
            students:30
        });
    }
    return(
        <div>
            <h2>Test      : {data.test}</h2>
            <h2>Quesionts : {data.questions}</h2>
            <h2>Students  : {data.students}</h2>
            <button onClick={handleEvent}>Click to update</button>
        </div>
    )
}

export default App2;