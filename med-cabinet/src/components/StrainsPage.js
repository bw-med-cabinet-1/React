import React, { useState, useEffect } from "react";
import StrainsCard from "./StrainsCard";
import StrainsList from "./StrainsList";
import { fetchApi } from "../api/fetchApi";
import styled from "styled-components";

const StrainsStyle = styled.div`
  * {
    font-family: "Source Sans Pro", sans-serif;
  }
  background: linear-gradient(#2d6a4f, #1b4332);
  margin: 1.5% auto;
  padding: 4%;
  width : 98%;
  color: white;
  height: 110vh;

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
    getStrains()
  }, []);

  return (
      <StrainsStyle>
        <div className="strain-page">
        <h1> Strains Page </h1>
        <StrainsList strains={strainList} getStrains={getStrains} updateStrains={setStrainList} />
        </div>
      </StrainsStyle>
  );
};

export default StrainsPage;
