import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


export default function YourStrains(props) {
 
    const { strains } = props
 
    return (
        <Container className="strainList-container">
        {
        strains.map((strain) => (
          <Container className='card-container' key={strain.Strain}>
          <Card body className='strain-card'>
            <CardTitle>{strain.Strain}</CardTitle>
            <h1>{strain.Rating}</h1>
            <CardText>{strain.Description}</CardText>
            <Button>Go somewhere</Button>
          </Card>
          </Container>
    ))}
      </Container>
    )
}