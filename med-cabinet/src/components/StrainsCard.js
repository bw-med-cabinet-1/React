import React from "react";

const StrainsCard = (props) => {
  const { strains, type, rating, effects, flavor, description } = props.strains;

  return (
    <div className="strain-card">
      <h2>{strains}</h2>
      <div className="strain-type">
        Type <em>{type}</em>
      </div>
      <div className="strain-rating">
        Rating <strong>{rating}</strong>
      </div>
      <div className="strain-effect">
        Effect <strong>{effects}</strong>
      </div>
      <div className="strain-flavor">
        Flavor <strong>{flavor}</strong>
      </div>
      <div className="strain-rating">
        Description <strong>{description}</strong>
      </div>
    </div>
  );
};

export default StrainsCard
