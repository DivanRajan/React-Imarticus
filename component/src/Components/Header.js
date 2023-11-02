import React from 'react';

class Header extends React.Component{
    constructor (props) {
        super(props);
        this.state = {favoritecolor:"red"};

    }
   componentDidMount(){
    setTimeout(() => {
        this.setState({favoritecolor: "Yellow"})
        },5000)
   }
   render(){

    return(
        <h1>My Favourite color is {this.state.favoritecolor}</h1>
    );
   }
}
export default Header;