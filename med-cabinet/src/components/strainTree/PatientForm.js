import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import styled from 'styled-components'

const Styles = styled.div`
      {  margin: 2% auto;
        padding: 1% 3%;
        background-color: #edf4ed;
        width: 85%;
        border-radius: 10px;
        border: 2px solid #CED4DA;

        box-shadow: 0px 15px 25px rgba(0,0,0,.6);

    }

    h2 {
        color: #5A6267;
    }

    h5 {
        color: #5A6267;
        text-align: left;
        margin: 4px 0 4px 1%;
        font-size: 1.6em;
    }

    .formGroup {
        margin: 50px 0;
    }

    .selection-input {
        width: 97%;
        margin: 0 auto;
    }

    .form-section {
        margin: 32px 0;
    }

    .ailment-checklist {
        border: 1px solid #CED4DA;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 8px 0;
        margin: 8px 0;
        background-color: white;
    }

    .positive-res-list {
        border: 1px solid #CED4DA;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 8px 0;
        margin: 8px 0;
        background-color: white;
    }

    .negative-res-list {
        border: 1px solid #CED4DA;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 8px 0;
        margin: 8px 0;
        background-color: white;
    }

    .ailment {
        width: 20%;
    }

    .positive-response {
        width: 20%;
    }

    .negative-response {
        width: 20%;
    }

    label {
        color: #5A6267;
        font-size: 1.2em;
    }

    .strainType-selection {
        color: #5A6267;
        text-align: left;
        margin: 0;
        padding: 0;
        font-size: 1.6em;     
    }

    .text-input {
        font-size: 1.6em;
        
    }

    button {
        margin: 16px;
        background-color: #6C757D;
        padding: 24px 8%;
        font-size: 1.6em;
    }

    button:hover {
        background-color: #5A6267;
    }
  
`

export default function PatientForm(props) {

    const { values, changeForm, submit, toggle } = props
    
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        changeForm(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

  return (
    <Styles>
    <Container className='form-container'>
            <h2>Find Your Strain</h2>
        <Form onSubmit={onSubmit} className='form'>

        {/* <FormGroup>
            <Label for="ailments2">Select your ailments TWO</Label>          
            <Input
                type="select"
                name="ailments2"
                onChange={onChange}
                value={values.ailments2}
                multiple
            >
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='black'>Black</option>
            <option value='orange'>Orange</option>
            </Input>        
        </FormGroup> */}
        <Container className='form-section'>
        <h5>Ailments</h5>
        <FormGroup check className="ailment-checklist">
            <Container className="ailment">
                <Label check>
                <Input 
                    type="checkbox"
                    name="anxiety"
                    checked={values.anxiety} 
                    onChange={onChange}
                />{' '}
                Anxiety
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name='depression'
                        checked={values.depression}
                        onChange={onChange}
                    />{' '} 
                Depression
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="pain"
                        checked={values.pain}
                        onChange={onChange}
                    />{' '} 
                Pain
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="fatigue"
                        checked={values.fatigue}
                        onChange={onChange}
                    />{' '} 
                Fatigue
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="insomnia"
                        checked={values.insomnia}
                        onChange={onChange}
                    />{' '} 
                Insomnia
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="brain_fog"
                        checked={values.brain_fog}
                        onChange={onChange}
                    />{' '} 
                Brain Fog
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="loss_of_appetite"
                        checked={values.loss_of_appetite}
                        onChange={onChange}
                    />{' '} 
                Loss of Appetite
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="nausea"
                        checked={values.nausea}
                        onChange={onChange}
                    />{' '} 
                Nausea
                </Label>
            </Container>
            <Container className="ailment">
                <Label check>
                    <Input
                        type="checkbox"
                        name="low_libido"
                        checked={values.low_libido}
                        onChange={onChange}
                    />{' '} 
                Low Libido
                </Label>
                </Container>
        </FormGroup>
        </Container>
        <Container className='form-section'>
        <h5>What feelings are you seeking?</h5>
        <FormGroup check className="positive-res-list">
            <Container className="positive-response">
                <Label check>
                <Input 
                    type="checkbox"
                    name="Happy"
                    checked={values.Happy} 
                    onChange={onChange}
                />{' '}
                Happy
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name='Relaxed'
                        checked={values.Relaxed}
                        onChange={onChange}
                    />{' '} 
                Relaxed
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Euphoric"
                        checked={values.Euphoric}
                        onChange={onChange}
                    />{' '} 
                Euphoric
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Uplifted"
                        checked={values.Uplifted}
                        onChange={onChange}
                    />{' '} 
                Uplifted
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Creative"
                        checked={values.Creative}
                        onChange={onChange}
                    />{' '} 
                Creative
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Sleepy"
                        checked={values.Sleepy}
                        onChange={onChange}
                    />{' '} 
                Sleepy
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Energized"
                        checked={values.Energized}
                        onChange={onChange}
                    />{' '} 
                Energized
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Focused"
                        checked={values.Focused}
                        onChange={onChange}
                    />{' '} 
                Focused
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Hungry"
                        checked={values.Hungry}
                        onChange={onChange}
                    />{' '} 
                Hungry
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Talkative"
                        checked={values.Talkative}
                        onChange={onChange}
                    />{' '} 
                Talkative
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Tingly"
                        checked={values.Tingly}
                        onChange={onChange}
                    />{' '} 
                Tingly
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Giggly"
                        checked={values.Giggly}
                        onChange={onChange}
                    />{' '} 
                Giggly
                </Label>
            </Container>
            <Container className="positive-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="Aroused"
                        checked={values.Aroused}
                        onChange={onChange}
                    />{' '} 
                Aroused
                </Label>
            </Container>
        </FormGroup>
        </Container>
        <Container className='form-section'>
        <h5>What feelings are you trying to avoid?</h5>
        <FormGroup check className="negative-res-list">
            <Container className="negative-response">
                <Label check>
                <Input 
                    type="checkbox"
                    name="happyNeg"
                    checked={values.happyNeg} 
                    onChange={onChange}
                />{' '}
                Happy
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name='relaxedNeg'
                        checked={values.relaxedNeg}
                        onChange={onChange}
                    />{' '} 
                Relaxed
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="euphoricNeg"
                        checked={values.euphoricNeg}
                        onChange={onChange}
                    />{' '} 
                Euphoric
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="upliftedNeg"
                        checked={values.upliftedNeg}
                        onChange={onChange}
                    />{' '} 
                Uplifted
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="creativeNeg"
                        checked={values.creativeNeg}
                        onChange={onChange}
                    />{' '} 
                Creative
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="sleepyNeg"
                        checked={values.sleepyNeg}
                        onChange={onChange}
                    />{' '} 
                Sleepy
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="energizedNeg"
                        checked={values.energizedNeg}
                        onChange={onChange}
                    />{' '} 
                Energized
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="focusedNeg"
                        checked={values.focusedNeg}
                        onChange={onChange}
                    />{' '} 
                Focused
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="hungryNeg"
                        checked={values.hungryNeg}
                        onChange={onChange}
                    />{' '} 
                Hungry
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="talkativeNeg"
                        checked={values.talkativeNeg}
                        onChange={onChange}
                    />{' '} 
                Talkative
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="tinglyNeg"
                        checked={values.tinglyNeg}
                        onChange={onChange}
                    />{' '} 
                Tingly
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="gigglyNeg"
                        checked={values.gigglyNeg}
                        onChange={onChange}
                    />{' '} 
                Giggly
                </Label>
            </Container>
            <Container className="negative-response">
                <Label check>
                    <Input
                        type="checkbox"
                        name="arousedNeg"
                        checked={values.arousedNeg}
                        onChange={onChange}
                    />{' '} 
                Aroused
                </Label>
            </Container>
        </FormGroup>
        </Container>
                
        <FormGroup>
            <Label className='strainType-selection' for="strain_preference">Select Type of Strain</Label>
            <Input 
                type="select" 
                name="strain_preference" 
                onChange={onChange}
                value={values.strain_preference}
                className='selection-input'
            >
            <option value='Indica'>Indica</option>
            <option value='Sativa'>Sativa</option>
            <option value='Hybrid'>Hybrid</option>
            <option value='Not sure'>Not sure</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label className='text-input' for="text">Input Text</Label>
            <Input 
                type="text" 
                name="text" 
                onChange={onChange}
                value={values.text}
                className='selection-input'
            >
            </Input>
        </FormGroup>
        {/* <FormGroup className="specReqBox">
            <Label for="specialRequests">Special Requests?</Label>
            <Input 
                type="textarea" 
                name="specialRequests" 
                id="specialRequests" 
                onChange={onChange}
                value={values.specialRequests}
                className="specialRequests"
            />
        </FormGroup> */}
            <FormText color="muted">
            Thanks for choosing us! We hope you enjoy your experience and to see you again!
            </FormText>

        <Button className="submitButton">Find Your Strain</Button>
        {/* <div className='errors'>
                <div>{errors.telNum}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.size}</div>
             </div> */}
        </Form>
    </Container>
    </Styles>
  );
}