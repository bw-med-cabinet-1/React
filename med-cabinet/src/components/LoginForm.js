import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
    .container {
        border: 2px solid #596267;
        border-radius: 10px;
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

`



export default function LoginForm(props) {
    
    const { values, changeForm, submit, cancel } = props

    const onChange = evt => {
        const { name, value } = evt.target
        changeForm(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
      
      <Styles>
      <Container className='form-container'>
        <div className="headline-container">
            <h2>Log in</h2>
        </div>
        <Form onSubmit={onSubmit} className='form'>
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
            Thanks for choosing us! We hope you enjoy your experience and to see you again!
            </FormText>

        <Button className="submitButton">Sign in</Button>
        <Button tag={Link} to='/register' onClick={cancel} className='secondary-button'>Register</Button>
        {/* <div className='errors'>
                <div>{errors.telNum}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.size}</div>
        </div> */}
        </Form>
        
    </Container>
    </Styles>
    )
}