import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Styles = styled.div`
    {
        font-family: "Source Sans Pro", sans-serif;
        background: linear-gradient(#2d6a4f, #1b4332); // eslint-disable-line
        margin: .75% auto;
        padding: 4%;
        width : 98%;
        color: white;
        height: auto;
        border-radius: 10px;
    }

    .container {
        margin: 2% auto;
        padding: 1% 3%;
        background-color: #edf4ed;
        width: 70%;
        border-radius: 10px;
        border: 2px solid #CED4DA;

        box-shadow: 0px 15px 25px rgba(0,0,0,.6);

    }

  .headline-container {
    color: #596267;
  }

  button {
    margin: 16px 16px;
  }

  .secondary-button {
    background-color: white;
    color: #596267;
    margin: 0 8px 8px;
  }

  .secondary-button:hover {
    background-color: #596267;
    color: white;
  }

  label {
    color: #596267;
  }

  input {
  }
`;

export default function LoginForm(props) {
  const { values, changeForm, submit, cancel, errors } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    changeForm(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  

  return (
    <Styles>
      <Container className="form-container">
        <div className="headline-container">
          <h2>Log in</h2>
        </div>
        <Form onSubmit={onSubmit} className="form">
          {/* <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input 
                type="text" 
                name="first_name"
                placeholder="enter your first name"
                onChange={onChange}
                value={values.first_name} 
            />
        </FormGroup>
        <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input 
                type="text" 
                name="last_name"  
                placeholder="enter your last name"
                onChange={onChange}
                value={values.last_name} 
            />
        </FormGroup>  */}
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="enter your username"
              onChange={onChange}
              value={values.username}
            />
          </FormGroup>
          {/* <FormGroup>
            <Label for="email">Email</Label>
            <Input 
                type="email" 
                name="email"  
                placeholder="enter your e-mail"
                onChange={onChange}
                value={values.email} 
            />
        </FormGroup> */}
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              onChange={onChange}
              value={values.password}
            />
          </FormGroup>

          <FormText color="muted">
            Thanks for choosing us! We hope you enjoy your experience and to see
            you again!
          </FormText>

          <Button className="submitButton" type="submit"  > Sign in </Button>
          {/* onClick={handleClick} */}
          <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
        </div>
        </Form>
        <Button
          tag={Link}
          to="/register"
          onClick={cancel}
          className="secondary-button"
        >
          Register
        </Button>
        <Button tag={Link} to="/" onClick={cancel} className="secondary-button">
          Cancel
        </Button>
      </Container>
    </Styles>
  );
}
