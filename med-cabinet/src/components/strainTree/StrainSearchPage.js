import React from 'react'
import { Container } from 'reactstrap'
import PatientForm from './PatientForm'
import StrainDisplay from './StrainDisplay'
import styled from 'styled-components'

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

    .search-page {
        margin: 2% auto;
        padding: 1% 3%;
        background-color: #edf4ed;
        width: 70%;
        border-radius: 10px;
        box-shadow: 0px 15px 25px rgba(0,0,0,.6);

    }
`

export default function StrainSearchPage(props) {

    const { values, changeForm, submit } = props

    return (
        <Styles>
        <div className='search-page'>
            <PatientForm 
            values={values}
            changeForm={changeForm}
            submit={submit}
            />
        </div>
        </Styles>
    )
}