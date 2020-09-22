import React, { useState, useEffect } from "react";

import StrainsList from "./StrainsList"
import { fetchApi } from "../api/fetchApi"

const StrainsPage = () => {
    const [strainList, setStrainList] = useState([])
    const getStrains =() =>{
        fetchApi()
        .then(res => {
            console.log(res)
            setStrainList(res.data)
        })
        .catch(err => {
            consolelog(err, "there's an error")
        })
    }

    useEffect(() => {
        getStrains();
    },[setStrainList])

    return (
        <div className="strain-page">
            <StrainsList strains ={strainList} updateStrains = {setStrainList}/>
        </div>
    )
}
