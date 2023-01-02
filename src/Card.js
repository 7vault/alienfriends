import React, { props } from "react";

const Card = (props) => {
  return (
    <div className=" tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-8 ">
      <img alt="aliens" src={`https://robohash.org/${props.id}/?set=set2`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
