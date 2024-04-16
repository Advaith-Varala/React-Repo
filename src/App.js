
import './App.css';
import Listcomponents from './listcomponent';
import Listitems from './listitems';
import { Image } from './task1';
import Tablecomponenet from './General_Prop';

import { Cards, Forms, NavBar } from './1-april/css_task';
import { Products } from './3,4-april/axios';
import { Fruits } from './Functional-hooks/useSTATE(8-april)';
import { UncontrolledInput } from './forms/Uncontrolledform1';
import { ControlledForms } from './forms/controlledforms';
import { ControlledState } from './forms/contolled_singlefunc';

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
      {/* <Products/> */}
      {/* <Fruits/> */}
      {/* <UncontrolledInput/> */}
      {/* <ControlledForms/> */}
      <ControlledState/>
    </div>
  );
}

export default App;
