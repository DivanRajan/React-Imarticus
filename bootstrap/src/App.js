
import './App.css';
import ThemeSwitcher1 from './themeswitcher';
import Sample1 from './Sample1';
import Car from './Car';
import Timer from './Timer';
import Button from './Button';
import Counter from './Counter';
import Timer2 from './Timer2';
import MouseEvent from './MouseEvent';
import CheckBox from './CheckBox';
import { useState } from 'react';
import { NavItem } from 'reactstrap';
import CheckList from './CheckList';
import TableForm from './TableForm';
import Form from './Form';
import Products from './Products';
function App() {
  /*const checkboxes = ['JAVA', 'React js','Gift','MongoDB']
  const [checkedState,setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
      );
      const handleCheckboxChange =(index) => {
        const updateCheckedState = checkedState.map((item, idx) =>idx === index ? !item : item
        );
        setCheckedState(updateCheckedState);
      };

      const countCheckedCheckboxes = () => {
        return checkedState.filter(Boolean).length;
      };
  return (
    <div className="App">
  <h1>Select the course you want to learn</h1>
  <CheckList
  checkboxes={checkboxes}
  checkedState={checkedState}
  handleCheckboxChange={handleCheckboxChange}
  />
  <p>
    Number of checked checkboxes:
    <strong>{countCheckedCheckboxes()}</strong>
  </p>
    </div>
  );
}
  {/*<ThemeSwitcher1/>
      <Sample1/>
      <Car/>
      <Timer/>
      <Button/>
      <Counter/>
      <Timer2/>
  <MouseEvent/>*/
  return(
    <div className='App'>
<TableForm/>
<Form/>
<Products/>
    </div>
  )
}

export default App;
