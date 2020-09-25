import React, { useState, useEffect } from 'react'
import { fetchApi } from "../../api/fetchApi";
import styled from 'styled-components'
import { Card, Button, CardTitle, Collapse, CardText, Row, Col, Container } from 'reactstrap'

const Styles = styled.div`
    {
        margin: 2% auto;
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
        width: 45%;
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
    

export default function StrainDisplay(props) {
    const [strainList, setStrainList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const getStrains = () => {
        fetchApi()
        .then(res => {
            console.log(res.data, "this is the data");
            setStrainList(res.data);
         })
        .catch(err => {
        console.log(err, "there's an error");
        });
    };
    useEffect(() => {
        getStrains()
    }, []);
    
    return (
        <Styles>
        <Container className="big-container">
            <h2>Strain List</h2>
        <Container className="strainList-container">
        {strainList.map((strain) => (
            <Container className='card-container' key={strain.strain}>
            <Card body className='strain-card'>
                <CardTitle className='card-title'>{strain.strain}</CardTitle>
                <CardText className='strain-type'>{strain.type}</CardText>
                <CardText>{strain.description}</CardText>
                <CardText>Flavors: {strain.flavors}</CardText>
                <CardText>Effects: {strain.effects}</CardText>
                <CardText>RATING: {strain.rating}</CardText>
                <Button onClick={toggle}>Info</Button>
            </Card>
            </Container>
        ))}
        </Container>
        </Container>
        </Styles>
    )
}