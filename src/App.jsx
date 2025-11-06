import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ShoppingList from'./components/ShoppingList';
import Profile from './components/profile';

const App=()=>{
    return(
<div>
<Counter/>
<TodoList/>
<ShoppingList/>
<Profile/>
    </div>
       
    );
    
}
export default App;