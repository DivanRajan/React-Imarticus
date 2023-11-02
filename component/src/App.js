import logo from './logo.svg';
import React from 'react';
import './App.css';
import Employee from './Components/Employee';
import Counter  from './Components/Counter';
import Greeting  from './Components/Counter';
import Welcome1 from './Components/Welcome1';
import {Student} from './Components/Student';
import {Student1} from './Components/Student1';
import {Skill} from './Components/Skill';
import Company, {company} from './Components/Company';
import LoginForm from './Components/LoginForm';
import Constructor from './Components/Constructor';
import Uncontrolled from './Components/Uncontrolled';
import Controlled from './Components/Controlled';
import MultipleInput from './Components/MultipleInput';
import Example from './Components/Example';
import Example1 from './Components/Example1';
import NotificationMsg from './Components/Notificationmsg';
import List from './List';
import NameList from './Components/NameList';
import MenuBlog  from './Components/MenuBlog';
import MyComponent from './Components/MyComponent';
import CustomTextInput from './Components/CustomTextInput';
import {Route, Routes,Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Place from './Components/Place';
import Check from './Components/Check';
import Header from './Components/Header';
import Componentupdate from './Components/Componentupdate';
import SnapShot from './Components/SnapShot';
import Componen from './Components/Componen';
import ReacTable1 from './Components/ReacTable1';
const data = [
  {id: 1, title: 'First', content: 'Welcome  to Imarticus!!'},
  {id: 2, title: 'Second', content: 'It is the best ReactJS Tutorial!!'},
  {id: 3, title: 'Third', content: 'Here,you can learn all the ReactJS topics!!'}
];
const myLists = ['Peter' , 'Sachin' , 'Kevin' , 'Dhoni' , 'Alisa'];

function App() {
  return (
<div className='App'>
  <Componentupdate/>
  <SnapShot/>
  <Componen/>
  <Container/>
  <ReacTable1 />
</div>

  );
  }
 

  class Container extends React.Component{
    constructor(props){
      super(props)
      this.state = {show:true};

    }
    delHeader = () =>{
      this.setState({show:false});
    }
    render(){
      let myheader;
      if (this.state.show){
        myheader =<Child/>
      };
      return(
        <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }

  class Child extends React.Component{
    componentWilUnmount(){
      alert("The component named Header is about to be unmounted.");
    }
    render(){
      return(
        <h1>Hello World!</h1>
      );
    }
  }
export default App;
