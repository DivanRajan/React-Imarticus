import React from 'react';

class Example2 extends React.Component{
    state={
        name:"Nikhil",
        age:24,
        location:'Coimbatore'
    }
    handleEvent=()=>{
        this.setState({name:'Fire',age:12});
    }
    render(){
        return(
            <div>
                <h1>Welcome to Class Component</h1>
                <h2>Name ={this.state.name}</h2>
                <h2>Age ={this.state.age}</h2>
                <h2>Location ={this.state.location}</h2>
                <button onClick={this.handleEvent}>
                        Click to Change
                </button>
            </div>
        )
    }
}
export default Example2;