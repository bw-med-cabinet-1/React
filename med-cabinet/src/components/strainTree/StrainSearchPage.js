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
`

export default function StrainSearchPage(props) {

    const { values, changeForm, submit } = props

    return (
        <Styles>
            <PatientForm 
            values={values}
            changeForm={changeForm}
            submit={submit}
            />
        </Styles>
    )
}