import React from "react";
import Card from "./Card";
import { aliens } from "./aliens";

const CardList = () => {
  return (
    <div>
      <Card id={aliens[0].id} name={aliens[0].name} email={aliens[0].email} />
      <Card id={aliens[1].id} name={aliens[1].name} email={aliens[1].email} />
      <Card id={aliens[2].id} name={aliens[2].name} email={aliens[2].email} />
    </div>
  );
};

export default CardList;
