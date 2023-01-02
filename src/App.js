import React, { Component } from "react";
import { aliens } from "./aliens";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>AlienFriends</h1>
      <SearchBox />
      <CardList aliens={aliens} />
    </div>
  );
};

export default App;
