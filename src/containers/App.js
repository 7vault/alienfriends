import React, { Component } from "react";
// import { aliens } from "./aliens"; for local data ressources
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./app.css";
import Scroll from "../components/Scroll";

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
    const { aliens, searchField } = this.state;
    const filteredAliens = aliens.filter((alien) => {
      return alien.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !aliens.length === 0 ? (
      <h1 className="txtName tc f1">LOADIND...</h1>
    ) : (
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

export default App;
