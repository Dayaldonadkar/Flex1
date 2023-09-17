import React from "react";

const Card2 = ({ name, designation, description, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{designation}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card2;
