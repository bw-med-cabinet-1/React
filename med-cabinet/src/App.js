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

const initialRegFormValues = {
  username: "",
  password: "",
  role: false,
};

const initialLoginFormValues = {
  username: "",
  password: "",
};

function App() {
  const history = useHistory();

  const [regFormValues, setRegFormValues] = useState(initialRegFormValues);
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);


  const changeLoginForm = (name, value) => {
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
        history.push("/strain-page");
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
