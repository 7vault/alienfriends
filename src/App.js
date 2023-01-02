import React, { Component } from "react";
import { aliens } from "./aliens";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredAliens = this.state.aliens.filter((aliens) => {
      return aliens.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>AlienFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList aliens={filteredAliens} />
      </div>
    );
  }
}

export default App;
