import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm';
import { Route } from 'react-router-dom'
import axios from 'axios'

const initialRegFormValues = {
  username: '',
  password: '',
  role: false,
}

const initialLoginFormValues = {
  username: '',
  password: '',
}

function App() {

  const [regFormValues, setRegFormValues] = useState(initialRegFormValues)
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)

  const changeLoginForm = (name, value) => {
    setLoginFormValues({ ...loginFormValues, [name] : value})
  }

  const changeRegForm = (name, value) => {
    setRegFormValues({ ...regFormValues, [name] : value})
  }

  const cancelInput = () => {
    setRegFormValues(initialRegFormValues)
    setLoginFormValues(initialLoginFormValues)
  }

  const signUserIn = userDetails => {
    axios.post('https://bw-medicine-cabinet.herokuapp.com/api/auth/login', userDetails)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(userDetails)
        setLoginFormValues(initialLoginFormValues)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://bw-medicine-cabinet.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        console.log('this is the response' + res)
        console.log('this is the user object' + newUser)
        setRegFormValues(initialRegFormValues)
      })
      .catch(err => {
        console.log(newUser)
        setRegFormValues(initialRegFormValues)
      })
  }

  const submitLoginForm = () => {
    const userDetails = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim(),
    }
    signUserIn(userDetails)
  }

  const submitRegForm = () => {
    const newUser = {
      username: regFormValues.username.trim(),
      password: regFormValues.password.trim(),
      role: regFormValues.role,
    }
    postNewUser(newUser)
  }

  return (
    <div className="App">
      <Route exact path='/'>
          <LoginForm 
            values={loginFormValues}
            changeForm={changeLoginForm}
            submit={submitLoginForm}
            cancel={cancelInput}
          />
      </Route>
      <Route path='/register'>
          <RegisterForm 
            values={regFormValues}
            changeForm={changeRegForm}
            submit={submitRegForm}
            cancel={cancelInput}
          />
      </Route>
    </div>
  );
}

export default App;
