import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';



export default function RegisterForm(props) {
    
    const { values, changeForm, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        changeForm(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <Container className='form-container'>
        <h3>Order here :)</h3>
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
        <FormGroup>
            <Label for="role">Select</Label>
            <Input 
                type="select" 
                name="role"
                onChange={onChange}
                value={values.role}
            >
            <option value={false}>User</option>
            <option value={true}>Admin</option>
            </Input>
        </FormGroup>
            <FormText color="muted">
            Thanks for choosing us! We hope you enjoy your experience and to see you again!
            </FormText>

        <Button className="submitButton">Register</Button>
        {/* <div className='errors'>
                <div>{errors.telNum}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.size}</div>
        </div> */}
        </Form>
    </Container>
    )
}