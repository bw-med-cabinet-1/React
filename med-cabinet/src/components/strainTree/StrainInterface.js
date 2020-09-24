import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PatientForm from './PatientForm'
import styled from 'styled-components'
import StrainDisplay from './StrainDisplay'

const Styles = styled.div`
    .strain-display {
        border: 1px solid #536354;
        border-radius: 10px;
        padding: 16px;
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
`

export default function StrainInterface(props) {

  const { values, changeForm, submit } = props;

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Styles>
    <Container className='strain-display'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Strains For You
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Try Again
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            All Strains
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
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
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <PatientForm 
            values={values}
            changeForm={changeForm}
            submit={submit}
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
