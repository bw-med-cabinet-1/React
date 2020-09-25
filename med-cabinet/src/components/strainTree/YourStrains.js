import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components'

const Styles = styled.div`
  .strainList-container {
        border: 2px solid #536354;
        border-radius: 10px;
        margin: 24px 0;
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
            <h1>{strain.Strain}</h1>
            <h5>{strain.Rating}</h5>
            <CardText>{strain.Description}</CardText>
            <Button>Go somewhere</Button>
          </Card>
          </Container>
    ))}
      </Container>
    </Styles>
    )
}