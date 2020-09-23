import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import style from "styled-components"

const ListStyle = style.div`
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

`
const initialStrains = {
  strain_name: "",
  symptoms: "",
  effects: "",
  description: "",
};

const StrainsList = ({ strains, updateStrains }) => {
//   console.log(strain_name);
  const [edit, setEdit] = useState(false);
  const [strainsToEdit, setStrainsToEdit] = useState(initialStrains);

  const editStrain = (strain) => {
    setEdit(true);
    setStrainsToEdit(strain);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/strains/:${strainsToEdit.id}`, strainsToEdit)
      .then((res) => {
        updateStrains([
          ...strainsToEdit.map((strain) => {

            if (strain.id === strainsToEdit.id) {
              return strainsToEdit;
            } else {
              return strain;
            }
          }),
        ]);
        setEdit(false);
      })
      .catch((err) => {
        console.log(err,"there's an error in edit");
      });
  };

  const deleteStrain = (strain) => {
    axiosWithAuth()
      .delete(`/api/strains/:${strain.id}`)
      .then((res) => {
        updateStrains(strains.filter((strain) => strain.id !== res.data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <ListStyle>
    <div className="strain-list">
      <h3> Strain List</h3>
      <br/>
      <ul>
        {strains.map((strain) => (
          <h4 key={strain.strain} onClick={() => editStrain(strain)}>
            <span>
              <span
                className="delete-strain"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteStrain(strain);
                }}
              > x </span>
              {strain.strain_name}
            </span>
          </h4>
        ))}
      </ul>
      {/* close for 1st ul */}
      {editStrain && (
        <form onSubmit={saveEdit}>
          <legend> Edit the strains name as your preference </legend>
          <label>
            {" "}
            Strain name 
            <input
              onChange={(e) =>
                setStrainsToEdit({
                  ...strainsToEdit,
                  strain_name: e.target.value,
                })
              }
              value={strainsToEdit.strain_name}
            />
          </label>
          <div className="buton">
            <button type="submit "> Save </button> &nbsp;
            <button onClick={() => setEdit(false)}> Cancel </button>
          </div>
        </form>
      )}
    </div>
    </ListStyle>
  );
}; //close for StrainsList

export default StrainsList;
