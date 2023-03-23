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

    // Defines state: the changable value to b passed into components
    this.state = {
      // stores the moment-to-moment values of the PersonalInfoForm
      // personal: { 
      //   username: '',
      //   phone: '',
      //   email: '',
      //   website: '',
      // },
      // on submit, goes to the PersonalOutput component
      personalCurrent: { 
        username: '',
        phone: '',
        email: '',
        website: '',
      },
      // stores the moment-to-moment values of the EducationForm
      // education: {
      //   school: '',
      //   major: '',
      //   degree: '',
      //   startDate: '',
      //   endDate: '',
      //   id: uniqid(),
      // },
      education: {},
        school: '',
        major: '',
        degree: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      
      // On submit, takes the current Education values and adds to list, then read by EducationOutput component
      educationEntries: [],
    };
    //Essential for handling multiple inputs but not sure why yet
    this.handleChange = this.handleChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  // Handles what's typed in the input fields: updates the state to match the current input value
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEducationChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // onSubmit handler for PersonalInfoForm
  onSubmitPersonal = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state:
    this.setState({
      // Update PersonalCurrent (read by output) to values in input fields
      personalCurrent : {
        username : this.state.username,
        phone : this.state.phone,
        email : this.state.email,
        website : this.state.website,
      },
      // sets Personal in state to an empty string to clear input field
      // personal: { 
      //   // username: '',
      //   // phone: '',
      //   // email: '',
      //   // website: '',
      // },
      username: '',
      phone : '',
      email : '',
      website : '',
    });
  };

  // onSubmit handler for form
  onSubmitEducation = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state
    this.setState({
      // Add current education form inputs to an object, add the object to an array to be read by the component

      education: {
        school : this.state.school,
        major : this.state.major,
        degree : this.state.degree,
        startDate : this.state.startDate,
        endDate : this.state.endDate,
        id: uniqid(),
      },

      educationEntries : this.state.educationEntries.concat(this.state.education),

      // I thought this would clear out the input fields but it seems to stop the object from being properly added at all
      // education: {
      //   school : '',
      //   major : '',
      //   degree : '',
      //   startDate : '',
      //   endDate : '',
      //   id: uniqid(),
      // },
    });
    
  };

  render() {
    // Destructures state for cleaner look (Still not entirely sure what that means)
    const { personalCurrent, educationEntries } = this.state;

    return (
      <div>
        <h1>CV Builder</h1>
        <div className="bodyWhole">
          <div className="bodyForms">
             <h2>Add Personal info:</h2>
              {/* Form for Personal info input */}
             <form className="personalEntryForm" onSubmit={this.onSubmitPersonal}>
              <label htmlFor= "nameInput" >Name: 
                <input 
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    type="text" 
                    id="nameInput"
                />
              </label>

              <label htmlFor= "phoneInput">Phone number: 
                <input 
                    name="phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                    type="text" 
                    id="phoneInput"
                />
              </label>

              <label htmlFor= "emailInput">Email address:
                <input 
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="text" 
                    id="emailInput"
                />
              </label>

              <label htmlFor= "websiteInput">Website: 
                <input 
                    name="website"
                    onChange={this.handleChange}
                    value={this.state.website}
                    type="text" 
                    id="websiteInput"
                />
              </label>

              <button>Update</button>
            </form>

            <h2>Add Education:</h2>
            {/* Form for Education info input */}
            <form className="educationEntryForm" onSubmit={this.onSubmitEducation}>
                <label htmlFor= "schooInput">School:
                  <input
                      name="school"
                      onChange={this.handleEducationChange}
                      value={this.state.school} 
                      type="text" 
                      id="schoolInput"
                  />
                 </label>

                <label htmlFor= "majorInput">Major:
                  <input 
                      name="major"
                      onChange={this.handleEducationChange}
                      value={this.state.major} 
                      type="text" 
                      id="majorInput"
                  />
                 </label>
                <label htmlFor= "degreeInput">Degree:
                  <input 
                      name="degree"
                      onChange={this.handleEducationChange}
                      value={this.state.degree} 
                      type="text" 
                      id="degreeInput"
                  />  
                </label>
                <label htmlFor= "startDateInput">Start date: 
                  <input 
                      name="startDate"
                      onChange={this.handleEducationChange}
                      value={this.state.startDate} 
                      type="text" 
                      id="startDateInput"
                  />
                </label>
                <label htmlFor= "endDateInput">End date: 
                  <input 
                      name="endDate"
                      onChange={this.handleEducationChange}
                      value={this.state.endDate}                 
                      type="text" 
                      id="endDateInput"
                  />
                </label>
                <button>Add</button>
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

              <button>Add</button>
            </form>
          </div>

          <div className="bodyOutput">
            <h2>Personal info</h2>
            <PersonalOutput personalCurrent={personalCurrent} />
            <h2>Education</h2>
            <EducationOutput educationEntries={educationEntries}/>
            <h2>Experience</h2>
            <ExperienceOutput />
          </div>

        </div>
      </div>
    );
  }
}

export default App;