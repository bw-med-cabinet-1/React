import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { Route } from 'react-router-dom'

const initialRegFormValues = {
  username: '',
  password: '',
  role: false,
}

function App() {

  const [regFormValues, setRegFormValues] = useState(initialRegFormValues)

  const changeForm = (name, value) => {
    setRegFormValues({ ...regFormValues, [name] : value})
  }

  const postNewUser = newUser => {
    console.log(newUser)
  }

  const submitForm = () => {
    const newUser = {
      username: regFormValues.username.trim(),
      password: regFormValues.password.trim(),
      role: regFormValues.role,
    }
    postNewUser(newUser)
  }

  return (
    <div className="App">
      <Route path='/'>
        <RegisterForm 
          values={regFormValues}
          changeForm={changeForm}
          submit={submitForm}
        />
      </Route>
    </div>
  );
}

export default App;
