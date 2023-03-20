//Contains logic and manages state

import React, { Component } from "react";
import Overview from "./components/Overview";
import './styles/styles.css';
//Package to create unique ids as object keys
import uniqid from "uniqid";
import PersonalEntry from "./components/PersonalEntry";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>CV Builder</h1>
        <div className="cvBody">
          <h2>Personal info</h2>
          <PersonalEntry />
          <h2>Education</h2>
          <Education />
          <h2>Experience</h2>
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;