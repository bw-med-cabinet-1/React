import React from 'react'
import { Container } from 'reactstrap'
import PatientForm from './PatientForm'
import StrainDisplay from './StrainDisplay'

export default function StrainSearchPage(props) {

    const { values, changeForm, submit } = props

    return (
        <Container>
            <PatientForm 
            values={values}
            changeForm={changeForm}
            submit={submit}
            />
            <StrainDisplay />
        </Container>
    )
}