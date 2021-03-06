import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const ListStyle = styled.div`
button { 
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
  text-shadow:0px 1px 0px #ffffff;

}
input{
  width: 100%;
  padding: 4%;
  margin: 3% 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
      }
legend {
  background-color: whitesmoke;
  color:  #081c15;
  width: 95%;
  border-radius: 10px; 
  margin : 2% auto;
  padding: 1%; 
  font-style: italic;
  font-size: 1.5rem;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.6);
}
.strain-list{
  display : flex;
  flex-flow: column wrap;
  justify-content: space-between;
}
h4 {
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.6);
  margin: 2% auto;
  padding: 2%;
  width: 95%;
}
h4:hover {
  background-color: whitesmoke;
  color: #081c15;
}
span{
  display: flex;
}
`

const initialStrains = {
  strain: "",
  type:"",
};

const StrainsList = ({ strains, updateStrains, getStrains }) => {
  console.log(strains);

  const [edit, setEdit] = useState(false);
  const [strainsToEdit, setStrainsToEdit] = useState(initialStrains);

  const editStrain = (strain) => {
    setEdit(true);
    setStrainsToEdit(strain);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`api/strains/${strainsToEdit.id}`, strainsToEdit)
      .then((res) => {
        console.log(res);

        updateStrains([
          ...strains.map((strain) => {
            if (strain.id === strainsToEdit.id) {
              return strainsToEdit;
            } else {
              return strain;
            }
          }),
        ]);
        getStrains();
        setEdit(false);
      })
      .catch((err) => {
        setEdit(false);
        console.log(err, "there's an error in edit");
      });
  };

  const deleteStrain = (strain) => {
    axiosWithAuth()
      .delete(`api/strains/${strain.id}`)
      .then((res) => {
        console.log(res.data);
        getStrains();
      })
      .catch((err) => console.log(err));
  };

  return (
    <ListStyle>
      <div className="strain-list">
        <legend> Edit your favorite strain's name as your preference </legend>
        {strains.map((strain) => (
          <h4 key={strain.strain} onClick={() => editStrain(strain)}>
            <span>
              <button
                className="delete-strain"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteStrain(strain);
                }}
              >
                x  
              </button>  &nbsp; &nbsp;
              <h5> Name : {strain.strain} </h5> &nbsp;
            </span>
          </h4>
        ))}

        {/* close for 1st ul */}
        {editStrain && (
          <form onSubmit={saveEdit}>         
            <label>
              Strain name 
              <input
                onChange={(e) =>
                  setStrainsToEdit({
                    ...strainsToEdit,
                    strain: e.target.value,
                  })
                }
                value={strainsToEdit.strain}
                name="Name of strain"
                type="text"
                placeholder="Name of strain"
              />
            </label>
            <div className="buton">
              <button type="submit" onClick={saveEdit}>
                {" "}
                Save{" "}
              </button>{" "}
              &nbsp;
              <button onClick={() =>  setStrainsToEdit(initialStrains)}> Cancel </button> &nbsp;
              {/* <button onClick={deleteStrain}> Delete</button> */}
            </div>
          </form>
        )}
      </div>
    </ListStyle>
  );
};
export default StrainsList;
