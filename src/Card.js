import React from "react";
import "./card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className=" tc dib br3 pa3 ma2 grow bw2 shadow-8 card-container">
      <img alt="aliens" src={`https://robohash.org/${id}/?set=set2`} />
      <div>
        <h2 className="txtName">{name}</h2>
        <p className="txtEmail">{email}</p>
      </div>
    </div>
  );
};

export default Card;
