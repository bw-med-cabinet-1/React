import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <RegisterForm />
      </Route>
    </div>
  );
}

export default App;
