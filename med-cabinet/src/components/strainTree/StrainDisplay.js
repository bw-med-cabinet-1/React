import React, { useState, useEffect } from 'react'
import { fetchApi } from "../../api/fetchApi";
import styled from 'styled-components'
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap'

const Styles = styled.div`
    .strainList-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .card-container {
        width: 45%;
    }
`
    

export default function StrainDisplay() {

    const [strainList, setStrainList] = useState([]);
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
        <Container><h3> Strain List</h3>
        <Container className="strainList-container">
        {strainList.map((strain) => (
            <Container className='card-container'>
            <h4 key={strain.strain}>
            <Card body className='strain-card'>
                <CardTitle>{strain.strain}</CardTitle>
                <CardText>{strain.description}</CardText>
                <Button>Go somewhere</Button>
            </Card>
          </h4>
            </Container>
        ))}
        </Container>
        </Container>
        </Styles>
    )
}