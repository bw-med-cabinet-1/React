import React, { useState } from 'react';
import '../../App.css';
import PatientForm from './PatientForm'
import StrainInterface from './StrainInterface'
import { Route } from 'react-router-dom'
import axios from 'axios'
import StrainDisplay from './StrainDisplay'
import { useHistory } from "react-router-dom";


const initialPatientFormValues = {
    text: '',
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
    const history = useHistory();

    const [yourStrainlist, setYourStrainList] = useState([])


    const [patientFormValues, setPatientFormValues] = useState(initialPatientFormValues)

    const changePatientForm = (name, value) => {
      setPatientFormValues({ ...patientFormValues, [name] : value})
    }

    const postNewStrainRequest = strainRequest => {
        axios.post('https://cors-anywhere.herokuapp.com/https://medcab-predictions.herokuapp.com/predict', strainRequest)
          .then(res => {
            console.log(strainRequest)
            console.log(res.data["Nearest Neighbors"])
            setYourStrainList(res.data["Nearest Neighbors"])
            setPatientFormValues(initialPatientFormValues)
            history.replace("/thisIsYourStrain")
          })
          .catch(err => {
            console.log(err)
            console.log(strainRequest)
          })
      }

    const submitPatientForm = () => {
    const strainRequest = {
        text: patientFormValues.text.trim(),
        // strain_preference: patientFormValues.strain_preference,
        // ailments: [ 'anxiety', 'depression', 'pain', 'fatigue', 'insomnia', 'brain_fog', 'loss_of_appetite', 'nausea', 'low_libido'].filter(ailment => patientFormValues[ailment]),
        include: [ 'Happy', 'Relaxed', 'Euphoric', 'Uplifted', 'Creative', 'Sleepy', 'Focused', 'Hungry', 'Talkative', 'Tingly', 'Giggly', 'Aroused' ].filter(posRes => patientFormValues[posRes]),
        exclude: [],
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
                strainList1={yourStrainlist}
                setPatientFormValues={setPatientFormValues}
                initialPFV={initialPatientFormValues}
              />
            </Route>
            <Route path='/allStrains'>
              <StrainDisplay />
            </Route>
        </div>
    )
  }