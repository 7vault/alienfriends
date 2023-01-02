import React, { Component } from "react";
// import { aliens } from "./aliens"; for local data ressources
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./app.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // pulling data from ressources online
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ aliens: users });
      });
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

    if (this.state.aliens.length === 0) {
      return <h1 className="txtName tc f1">LOADIND...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">AlienFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList aliens={filteredAliens} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
