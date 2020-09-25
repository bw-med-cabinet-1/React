import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


export default function YourStrains(props) {
 
    const { strains } = props

    if (!strains) {
        return <h2>Working on fetching the best strain for you :)</h2>
    }
 
    return (
        <Container className="strainList-container">
        {
        strains.map((strain) => (
          <Container className='card-container' key={strain.Strain}>
          <Card body className='strain-card'>
            <h1>{strain.Strain}</h1>
            <h5>{strain.Rating}</h5>
            <CardText>{strain.Description}</CardText>
            <Button>Go somewhere</Button>
          </Card>
          </Container>
    ))}
      </Container>
    )
}