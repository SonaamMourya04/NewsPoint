import React from 'react';

import { createContext } from 'react';
import ComponentA from './components/ComponentA';

export const Data=createContext()
const App=()=>{
    const name="Sonam";
    return(
<div>
<Data.Provider value={name}>
   
<ComponentA/>
</Data.Provider>
    </div>
       
    );
    
}
export default App;