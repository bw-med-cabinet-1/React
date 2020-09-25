import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import StrainPage from "../StrainsPage";

const Styles = styled.div`
    {
        margin: 2% auto;
        padding: 1% 3%;
        background-color: #edf4ed;
        width: 90%;
        border-radius: 10px;
        border: 2px solid #CED4DA;
        box-shadow: 0px 15px 25px rgba(0,0,0,0.6);

    }

    h2 {
        color: #5A6267;
    }

    .strainList-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .strain-card {
        box-shadow: 0px 10px 15px rgba(0,0,0,.6);
        border: 1px solid #B7B7B7;
    }
    
    .card-container {
        width: 100%;
        border-radius: 10px;
    }

    .card-title {
        font-size: 2.4em;
        text-decoration: bold;
    }

    .strain-type {
        font-size: 1.8em;
    }
`

export default function YourStrains(props) {
 
    const { strains } = props

    if (strains === []) {
        return <h2>Working on fetching the best strain for you :)</h2>
    } else
 
    return (
    <Styles>
      <Container className="strainList-container">
        {
          strains.map((strain) => (
            <Container className='card-container' key={strain.Strain}>
          <Card body className='strain-card'>
          <CardTitle className='card-title'>{strain.Strain}</CardTitle>
                <CardText className='strain-type'>{strain.Type}</CardText>
                <CardText>{strain.Description}</CardText>
                <CardText>Flavors: {strain.Flavors}</CardText>
                <CardText>Effects: {strain.Effects}</CardText>
                <CardText>RATING: {strain.Rating}</CardText>
                <Button>Info</Button>
          </Card>
         
          </Container>
          
    ))}
         <StrainPage/>
      </Container>      
      
    </Styles>
    )
}