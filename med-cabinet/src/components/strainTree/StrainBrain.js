import React, { useState } from 'react';
import '../../App.css';
import PatientForm from './PatientForm'
import StrainInterface from './StrainInterface'
import { Route } from 'react-router-dom'
import axios from 'axios'
import StrainDisplay from './StrainDisplay'

const initialPatientFormValues = {
    strain_preference: '',
    anxiety: false,
    depression: false,
    pain: false,
    fatigue: false,
    insomnia: false,
    brain_fog: false,
    loss_of_appetite: false,
    nausea: false,
    low_libido: false,
    Happy: false,
    Relaxed: false,
    Euphoric: false,
    Uplifted: false,
    Creative: false,
    Sleepy: false,
    Energized: false,
    Focused: false,
    Hungry: false,
    Talkative: false,
    Tingly: false,
    Giggly: false,
    Aroused: false,
    happyNeg: false,
    relaxedNeg: false,
    euphoricNeg: false,
    upliftedNeg: false,
    creativeNeg: false,
    sleepyNeg: false,
    energizedNeg: false,
    focusedNeg: false,
    hungryNeg: false,
    talkativeNeg: false,
    tinglyNeg: false,
    gigglyNeg: false,
    arousedNeg: false,
  }

  export default function StrainBrain() {
    
    const [patientFormValues, setPatientFormValues] = useState(initialPatientFormValues)

    const changePatientForm = (name, value) => {
      setPatientFormValues({ ...patientFormValues, [name] : value})
    }

    const postNewStrainRequest = strainRequest => {
        axios.post('fakeaxiospost.com', strainRequest)
          .then(res => {
            console.log(res)
            console.log(strainRequest)
          })
          .catch(err => {
            console.log(err)
            console.log(strainRequest)
          })
      }

    const submitPatientForm = () => {
    const strainRequest = {
        strain_preference: patientFormValues.strain_preference,
        ailments: [ 'anxiety', 'depression', 'pain', 'fatigue', 'insomnia', 'brain_fog', 'loss_of_appetite', 'nausea', 'low_libido'].filter(ailment => patientFormValues[ailment]),
        include: [ 'Happy', 'Relaxed', 'Euphoric', 'Uplifted', 'Creative', 'Sleepy', 'Energized', 'Focused', 'Hungry', 'Talkative', 'Tingly', 'Giggly', 'Aroused' ].filter(posRes => patientFormValues[posRes]),
        exclude: [ 'happyNeg', 'relaxedNeg', 'euphoricNeg', 'upliftedNeg', 'creativeNeg', 'sleepyNeg', 'energizedNeg', 'focusedNeg', 'hungryNeg', 'talkativeNeg', 'tinglyNeg', 'gigglyNeg', 'arousedNeg' ].filter(negRes => patientFormValues[negRes]),
    }
    postNewStrainRequest(strainRequest)
    }
    
    return (
        <div>
            <Route path='/findYourStrain'>
                <PatientForm 
                values={patientFormValues}
                changeForm={changePatientForm}
                submit={submitPatientForm}
                />
            </Route>
            <Route path='/thisIsYourStrain'>
              <StrainInterface 
                values={patientFormValues}
                changeForm={changePatientForm}
                submit={submitPatientForm}
              />
            </Route>
            <Route path='/allStrains'>
              <StrainDisplay />
            </Route>
        </div>
    )
  }