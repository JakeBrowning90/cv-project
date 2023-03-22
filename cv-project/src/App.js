//Contains logic and manages state

import React, { Component } from "react";
import './styles/styles.css';
//Package to create unique ids as object keys
import uniqid from "uniqid";
import PersonalOutput from "./components/PersonalOutput";
import EducationOutput from "./components/EducationOutput";
import ExperienceOutput from "./components/ExperienceOutput";

class App extends Component {
  constructor() {
    super();

    // Defines state
    this.state = {
      // Handles what's typed in the input field
      personal: { 
        name: '',
        phone: '',
        email: '',
        website: '',
        id: uniqid(),
      },
      personalCurrent: { 
        name: '',
        phone: '',
        email: '',
        website: '',
        id: uniqid(),
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      personal : {
        name: e.target.value,
      }
    });
  };

  // onSubmit handler for form
  onSubmitName = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state
    this.setState({
      // Add current task (from input field) to the tasks array
      personalCurrent : this.state.personal,
      // sets task in state to an empty string to clear input field
      personal: { 
        name: '',
        id: uniqid(),
      },
    });
  };

  render() {
    // Destructures state for cleaner look
    const { personal, personalCurrent } = this.state;

    return (
      <div>
        <h1>CV Builder</h1>
        <div className="bodyWhole">
          <div className="bodyForms">
             <h2>Add Personal info:</h2>
              {/* Form for Personal info input */}
             <form className="personalEntryForm" onSubmit={this.onSubmitName}>
              <label htmlFor= "nameInput" >Name: 
                <input 
                    onChange={this.handleChange}
                    value={personal.name}
                    type="text" 
                    id="nameInput"
                />
              </label>
              <label htmlFor= "phoneInput">Phone number: 
                <input 
                    type="text" 
                    id="phoneInput"
                />
              </label>

              <label htmlFor= "emailInput">Email address:
                <input 
                    type="text" 
                    id="emailInput"
                />
              </label>

              <label htmlFor= "websiteInput">Website: 
                <input 
                    type="text" 
                    id="websiteInput"
                />
              </label>

              <button>Update</button>
            </form>

            <h2>Add Education:</h2>
            {/* Form for Education info input */}
            <form className="educationEntryForm">
                <label htmlFor= "schooInput">School:
                  <input 
                      type="text" 
                      id="schooInput"
                  />
                 </label>

                <label htmlFor= "majorInput">Major:
                  <input 
                      type="text" 
                      id="majorInput"
                  />
                 </label>
                <label htmlFor= "degreeInput">Degree:
                  <input 
                      type="text" 
                      id="degreeInput"
                  />  
                </label>
                <label htmlFor= "startDateInput">Start date: 
                  <input 
                      type="text" 
                      id="startDateInput"
                  />
                </label>

                <label htmlFor= "endDateInput">End date: 
                  <input 
                      type="text" 
                      id="endDateInput"
                  />
                </label>
                <button>Save</button>
            </form>

            <h2>Add Experience:</h2>
            {/* Form for Experience info input */}
            <form className="experienceEntryForm">

              <label htmlFor= "positionTitleInput">Position:
                <input 
                    type="text" 
                    id="positionTitleInput"
                />
              </label>

              <label htmlFor= "organizationInput">Organization: 
                <input 
                    type="text" 
                    id="organizationInput"
                />
              </label>

              <label htmlFor= "responsibilitiesInput">Responsibilities: 
                <input 
                    type="textarea" 
                    id="responsibilitiesInput"
                />
              </label>

              <label htmlFor= "startDateInput">Start date: 
                <input 
                    type="text" 
                    id="startDateInput"
                />
              </label>

              <label htmlFor= "endDateInput">End date: 
                <input 
                    type="text" 
                    id="endDateInput"
                />
              </label>

              <button>Save</button>
            </form>
          </div>

          <div className="bodyOutput">
            <h2>Personal info</h2>
            <PersonalOutput personalCurrent={personalCurrent} />
            <h2>Education</h2>
            <EducationOutput />
            <h2>Experience</h2>
            <ExperienceOutput />
          </div>

        </div>
      </div>
    );
  }
}

export default App;