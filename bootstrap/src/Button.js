import React, { Component } from 'react';

class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "Default Content"
        }
    }
    render() {
        return(
            <div>
                <div className="h1 bg-secondary text-white text-centre p-2">
                    {this.state.message}
                </div>
                <div className="text-centre">
                <button className="btn btn-secondary"
                onClick={ () => this.setState({ message:"clicked!"})}>
                    Click Me
                    </button>
                </div>
            </div>
        );
    }
}
export default Button;