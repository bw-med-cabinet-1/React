import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Route, Switch } from "react-router-dom";
// import { Switch } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "./utils/axiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";
import StrainsPage from "./components/StrainsPage";
import StrainBrain from './components/strainTree/StrainBrain'
import schema from './validation/formSchema'
import * as yup from 'yup'


const initialRegFormValues = {
  username: "",
  password: "",
  role: false,
};

const initialLoginFormValues = {
  username: "",
  password: "",
};

const initialLoginFormErrors = {
  username: "",
  password: "",
}



function App() {
  const history = useHistory();

  const [regFormValues, setRegFormValues] = useState(initialRegFormValues);
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);
  const [loginFormErrors, setLoginFormErrors] = useState(initialLoginFormErrors)


  const changeLoginForm = (name, value) => {
    validate(name, value)
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const changeRegForm = (name, value) => {
    setRegFormValues({ ...regFormValues, [name]: value });
  };

  const cancelInput = () => {
    setRegFormValues(initialRegFormValues);
    setLoginFormValues(initialLoginFormValues);
  };

  const signUserIn = (userDetails) => {
    axiosWithAuth()
      .post("api/auth/login", userDetails)
      .then((res) => {
        console.log(res.data);
        setLoginFormValues(initialLoginFormValues);
        localStorage.setItem("token", res.data.token);
        history.push("/findYourStrain");
      })
      .catch((err) => {
        console.log(userDetails);
        setLoginFormValues(initialLoginFormValues);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post(
        "https://bw-medicine-cabinet.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        console.log(res);
        setRegFormValues(initialRegFormValues);
        history.push('/login');
        alert("You've successfully registered, Welcome!!")
      })
      .catch((err) => {
        debugger;
      });
  };

  const submitLoginForm = () => {
    const userDetails = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim(),
    };
    signUserIn(userDetails);
  };

  const submitRegForm = () => {
    const newUser = {
      username: regFormValues.username.trim(),
      password: regFormValues.password.trim(),
      role: regFormValues.role,
    };
    postNewUser(newUser);
  };

  const validate = (name, value) => {
    // let's validate this specific key/value
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(schema, name)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => { // eslint-disable-line
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: err.errors[0]
        });
      });
  }

  return (
  <Switch>
      {/* <Router> */}
          <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginForm
            values={loginFormValues}
            changeForm={changeLoginForm}
            submit={submitLoginForm}
            cancel={cancelInput}
            errors={loginFormErrors}
          />
        </Route>  
        <PrivateRoute exact path="/strain-page" component={StrainsPage}/> 
      
        <Route path="/register">
          <RegisterForm
            values={regFormValues}
            changeForm={changeRegForm}
            submit={submitRegForm}
            cancel={cancelInput}
          />
        </Route>
        <StrainBrain />
      </div>
      {/* </Router> */}
    </Switch>
  );
}

export default App;
