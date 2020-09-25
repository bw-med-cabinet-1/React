import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PatientForm from './PatientForm'
import styled from 'styled-components'
import StrainDisplay from './StrainDisplay'
import YourStrains from './YourStrains';

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
    
    .strain-display {
      margin: 2% auto;
        padding: 1% 3%;
        border-radius: 10px;
        border: 2px solid #CED4DA;

        box-shadow: 0px 15px 25px rgba(0,0,0,.6);

    }

    button {
        background-color: #647565;
    }

    button:hover {
        background-color: #536354;
    }

    .card {
        border-color: #536354;
        color: #536354;
        margin: 16px 0;
    }

    .activeTab {
        border-color: #647565;
    }

    .tabs {
      color: white;
    }
`

export default function StrainInterface(props) {

  const { values, changeForm, submit, strainList1, setPatientFormValues, initialPFV, toggle, activeTab } = props;

  return (
    <Styles>
    <Container className='strain-display'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            className="tabs"
            onClick={() => { toggle('1'); }}
          >
            Strains For You
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            className="tabs"
            onClick={() => { 
              setPatientFormValues(initialPFV)
              toggle('2'); }}
          >
            Try Again
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            className="tabs"
            onClick={() => { toggle('3'); }}
          >
            All Strains
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        {/* <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row> */}
          <YourStrains 
            strains={strainList1}
          />
        </TabPane>
        <TabPane tabId="2">
          <PatientForm 
            values={values}
            changeForm={changeForm}
            submit={submit}
            toggle={toggle}
          />
        </TabPane>
        <TabPane tabId="3">
            <StrainDisplay />
        </TabPane>
      </TabContent>
    </Container>
    </Styles>
  );
}
