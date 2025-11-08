import React from 'react';

import { createContext } from 'react';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
import Form from './components/Form';

export const Data=createContext()
const App=()=>{
    const name="Sonam";
    return(
<div>
<Data.Provider value={name}>
   
<ComponentA/>
</Data.Provider>
<Counter/>
<Form/>
    </div>
       
    );
    
}
export default App;