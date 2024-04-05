
import './App.css';
import Listcomponents from './listcomponent';
import Listitems from './listitems';
import { Image } from './task1';
import Tablecomponenet from './General_Prop';
import {Fruits, FruitsState} from './2-april/state';
import { Cards, Forms, NavBar } from './1-april/css_task';
import { Products } from './3,4-april/axios';

function App() {
  return (
    <div className="App">
     {/* <Listitems/> */}
     {/* <Image/> */}
    {/* <Tablecomponenet/> */}
    
    {/* <NavBar/>
    <Cards/>
    <Forms/> */}
  
     {/* <FruitsState></FruitsState> */}
     {/* <Fruits/> */}
      <Products/>
    </div>
  );
}

export default App;
