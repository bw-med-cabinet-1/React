import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialStrains = {
  strain_name: "",
  symptoms: "",
  effects: "",
  description: "",
};

const StrainsList = ({ strains, updateStrains }) => {
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
        console.log("there's an error in edit");
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
    <div className="strain-list">
      <h3> Strain List</h3>
      <ul>
        {strains.map((strain) => (
          <li key={strain.strain} onClick={() => edit(strain)}>
            <span>
              <span
                className="delete-strain"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteStrain(strain);
                }}
              ></span>
              {strain.strain}
            </span>
          </li>
        ))}
      </ul>
      {/* close for 1st ul */}
      {editing && (
        <form onSubmit={saveEdit}>
          <legend> Edit the strains name as your preference </legend>
          <label>
            {" "}
            Strain name :
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
            <button type="submit "> Save </button>
            <button onClick={() => setEdit(false)}> Cancel </button>
          </div>
        </form>
      )}
    </div>
  );
}; //close for StrainsList

export default StrainsList;
