import React from "react";
class NewComponent extends React.Component{
constructor (props) {
    super(props);

    this.state = {
        message: "Imarticus Learning"
    };
}

styles={
    fontStyle:"italic",
    color:"purple"
};
Buttonchange = () => {
    this.setState({
        message: "Thank you for subscribing"
    });
};

render(){
    return(
        <div className="App">
            <h3 style={this.styles}>{this.state.message}</h3>
            <button onClick={this.Buttonchange}>subscribe</button>
        </div>
    );
}
}

export default NewComponent;