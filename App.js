import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import State from './state';
import btnmodule from "./button.module.css"
import Login from './login';
import Menu from './menu';
import Todos from './todos';
import Weather from './Weather';
import Food from './Food';
import { Routes, Route } from 'react-router-dom';
import Mealinfo from './mealinfo';
import News from './news';
import Movie from './movie';
import Uzair from './uzair';
import Portfolio from './portfolio';
function App() {


  return (
   
    <div className="App">
          {/* <State/>
          <Login/>
       <Menu/>  
       <Todos/> 
        <Routes>
      <Route path= '/' element={ <Food/>} />
      <Route path= '/:mealid' element={ <Mealinfo/>} />
           <Weather/>
      
     </Routes>
      <Movie/>
      <News/>
       <Uzair/>
        */}
        
   <Weather/>    
       
    
  
       
    
      


       
 
    </div>
  );
}

export default App;
