import React, { useState, useEffect } from "react";

import StrainsList from "./StrainsList";
import { fetchApi } from "../api/fetchApi";
import styled from "styled-components";

const StrainsStyle = styled.div`
  * {
    font-family: "Source Sans Pro", sans-serif;
    
  }

  background: linear-gradient(#2d6a4f, #1b4332);
  margin: 5% auto;
  padding: 4%;
  width : 90%;
  color: white;
  height: 80vh;

  .strain-page{    
      margin : 4% auto;
      padding: 2%;
      background-color: #081c15;
      width: 70%;
      border-radius: 15px;
      box-shadow: 0 15px 25px rgba(0,0,0,.6);
  }
`

const StrainsPage = (props) => {
  const [strainList, setStrainList] = useState([]);
  const getStrains = () => {
    fetchApi()
      .then((res) => {
        console.log(res, "this is the data");
        setStrainList(res.data);
      })
      .catch((err) => {
        console.log(err, "there's an error");
      });
  };

  useEffect(() => {
  getStrains();
  }, [setStrainList]);

  return (
    // <div className="strain-page">
      <StrainsStyle>
        <div className="strain-page">
        <h1> Strains Page </h1>
        <StrainsList strains={strainList} updateStrains={setStrainList} />
        </div>
      </StrainsStyle>
    // </div>
  );
};

export default StrainsPage;
