import React from 'react';

function NameList (props){
    const myList=props.myLists;
    const listItems = myList.map((myList)=>{
        return <li>{myList}</li>;
    });
    return(
        <div>
            <h2>
                Rendeing lists using props
                <ul>{listItems}</ul>
            </h2>
        </div>
    )
}
export default NameList;