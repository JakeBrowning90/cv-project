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
      personal: { 
        username: '',
        phone: '',
        email: '',
        website: '',
      },
      // on submit, goes to the PersonalOutput component
      personalCurrent: { 
        username: '',
        phone: '',
        email: '',
        website: '',
      },
      // stores the moment-to-moment values of the EducationForm
      education: {
        school: '',
        location: '',
        major: '',
        degree: '',
        details: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      // On submit, takes the current Education values and adds to list, then read by EducationOutput component
      educationEntries: [],

      // stores the moment-to-moment values of the ExperienceForm
      experience: {
        position: '',
        organization: '',
        location: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      // On submit, takes the current Education values and adds to list, then read by EducationOutput component
      experienceEntries: [],
    };
    //Essential for handling multiple inputs but not sure why yet
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  // Handles what's typed in the input fields: updates the state to match the current input value
  handlePersonalChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      personal: {
        ...this.state.personal, 
        [name]: value,
      }  
    });
  }

  handleEducationChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      education: {
        ...this.state.education, 
        [name]: value,
      }  
    });
  }

  handleExperienceChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      experience: {
        ...this.state.experience, 
        [name]: value,
      }  
    });
  }

  // onSubmit handler for PersonalInfoForm
  onSubmitPersonal = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state:
    this.setState({
      personalCurrent: this.state.personal,
      // sets Personal in state to an empty string to clear input field
      personal: { 
        username: '',
        phone: '',
        email: '',
        website: '',
      },
    });
  };

  // onSubmit handler for form
  onSubmitEducation = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();

    //Check if education key is already in use
    const replaceEntry = this.state.educationEntries.find(entry => entry.id == this.state.education.id);

    //if key isn't already in use, add new entry to array 
    if (replaceEntry == undefined) {
      this.setState({
        // Add current education form inputs to an object, add the object to an array to be read by the component
        educationEntries: this.state.educationEntries.concat(this.state.education),
      });
    }
    else {
      // Insert modified entry back into array
      const replaceIndex = this.state.educationEntries.indexOf(replaceEntry)
      const editedArray = [...this.state.educationEntries.slice(0,replaceIndex ), this.state.education, ...this.state.educationEntries.slice(replaceIndex + 1)]
      this.setState({
        educationEntries: editedArray,
      });
    }

    // Clear out the input fields, prepare next ID
    this.setState({
      education: {
        school : '',
        location: '',
        major : '',
        degree : '',
        details: '',
        startDate : '',
        endDate : '',
        id: uniqid(),
      },
    });
  };

  deleteEducationEntry(id) {
    const educationEntries = this.state.educationEntries.filter(entry => entry.id !== id);
    this.setState({ educationEntries: educationEntries });
  };

  // Send entry back to form
  editEducationEntry(id) {
    const updatedEntry = this.state.educationEntries.find(entry => entry.id == id);
    this.setState({
      education: {
        school: updatedEntry.school,
        location: updatedEntry.location,
        major: updatedEntry.major,
        degree: updatedEntry.degree,
        details: updatedEntry.details,
        startDate:  updatedEntry.startDate,
        endDate:  updatedEntry.endDate,
        id: updatedEntry.id,
      }  
    });
  };

  // onSubmit handler for form
  onSubmitExperience = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();

    //Check if education key is already in use
    const replaceEntry = this.state.experienceEntries.find(entry => entry.id == this.state.experience.id);

    //if key isn't already in use, add new entry to array 
    if (replaceEntry == undefined) {
      this.setState({
        // Add current education form inputs to an object, add the object to an array to be read by the component
        experienceEntries: this.state.experienceEntries.concat(this.state.experience),
      });
    }
    else {
      // Insert modified entry back into array
      const replaceIndex = this.state.experienceEntries.indexOf(replaceEntry)
      const editedArray = [...this.state.experienceEntries.slice(0,replaceIndex ), this.state.experience, ...this.state.experienceEntries.slice(replaceIndex + 1)]
      this.setState({
        experienceEntries: editedArray,
      });
    }

    // Clear out the input fields, prepare next ID
    this.setState({
      experience: {
        position : '',
        organization : '',
        location: '',
        responsibilities : '',
        startDate : '',
        endDate : '',
        id: uniqid(),
      },
    });
  };

  deleteExperienceEntry(id) {
    const experienceEntries = this.state.experienceEntries.filter(entry => entry.id !== id);
    this.setState({ experienceEntries: experienceEntries });
  };

  // Send entry back to form
  editExperienceEntry(id) {
    const updatedEntry = this.state.experienceEntries.find(entry => entry.id == id);
    this.setState({
      experience: {
        position: updatedEntry.position,
        organization: updatedEntry.organization,
        location: updatedEntry.location,
        responsibilities: updatedEntry.responsibilities,
        startDate:  updatedEntry.startDate,
        endDate:  updatedEntry.endDate,
        id: updatedEntry.id,
      }  
    });
  };


  render() {
    // Destructures state for cleaner look (Still not entirely sure what that means)
    const { personalCurrent, educationEntries, experienceEntries } = this.state;

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
                    onChange={this.handlePersonalChange}
                    value={this.state.personal.username}
                    type="text" 
                    id="nameInput"
                />
              </label>

              <label htmlFor= "phoneInput">Phone number: 
                <input 
                    name="phone"
                    onChange={this.handlePersonalChange}
                    value={this.state.personal.phone}
                    type="text" 
                    id="phoneInput"
                />
              </label>

              <label htmlFor= "emailInput">Email address:
                <input 
                    name="email"
                    onChange={this.handlePersonalChange}
                    value={this.state.personal.email}
                    type="text" 
                    id="emailInput"
                />
              </label>

              <label htmlFor= "websiteInput">Website: 
                <input 
                    name="website"
                    onChange={this.handlePersonalChange}
                    value={this.state.personal.website}
                    type="text" 
                    id="websiteInput"
                />
              </label>

              <button>Update</button>
            </form>

            <h2>Add Education:</h2>
            {/* Form for Education info input */}
            <form className="educationEntryForm" onSubmit={this.onSubmitEducation}>
                <label htmlFor= "schoolInput">School:
                  <input
                      name="school"
                      onChange={this.handleEducationChange}
                      value={this.state.education.school} 
                      type="text" 
                      id="schoolInput"
                  />
                </label>

                <label htmlFor= "locationInput">Location:
                  <input
                      name="location"
                      onChange={this.handleEducationChange}
                      value={this.state.education.location} 
                      type="text" 
                      id="locationInput"
                  />
                 </label>

                <label htmlFor= "majorInput">Major:
                  <input 
                      name="major"
                      onChange={this.handleEducationChange}
                      value={this.state.education.major} 
                      type="text" 
                      id="majorInput"
                  />
                 </label>

                <label htmlFor= "degreeInput">Degree:
                  <input 
                      name="degree"
                      onChange={this.handleEducationChange}
                      value={this.state.education.degree} 
                      type="text" 
                      id="degreeInput"
                  />  
                </label>

                <label htmlFor= "startDateInput">Start date: 
                  <input 
                      name="startDate"
                      onChange={this.handleEducationChange}
                      value={this.state.education.startDate} 
                      type="text" 
                      id="startDateInput"
                  />
                </label>

                <label htmlFor= "endDateInput">End date: 
                  <input 
                      name="endDate"
                      onChange={this.handleEducationChange}
                      value={this.state.education.endDate}                 
                      type="text" 
                      id="endDateInput"
                  />
                </label>

                <label htmlFor= "educationDetailsInput">Details:
                  <textarea 
                      name="details"
                      onChange={this.handleEducationChange}
                      value={this.state.education.details} 
                      // type="textarea" 
                      id="detailsInput"
                  />  
                </label>

                <button>Add</button>
            </form>

            <h2>Add Experience:</h2>
            {/* Form for Experience info input */}
            <form className="experienceEntryForm" onSubmit={this.onSubmitExperience}>

              <label htmlFor= "positionTitleInput">Position:
                <input
                    name="position"
                    onChange={this.handleExperienceChange}
                    value={this.state.experience.position}  
                    type="text" 
                    id="positionTitleInput"
                />
              </label>

              <label htmlFor= "organizationInput">Organization: 
                <input 
                    name="organization"
                    onChange={this.handleExperienceChange}
                    value={this.state.experience.organization}  
                    type="text" 
                    id="organizationInput"
                />
              </label>

              <label htmlFor= "locationInput">Location: 
                <input 
                    name="location"
                    onChange={this.handleExperienceChange}
                    value={this.state.experience.location}  
                    type="text" 
                    id="locationInput"
                />
              </label>

              <label htmlFor= "startDateInput">Start date: 
                <input 
                    name="startDate"
                    onChange={this.handleExperienceChange}
                    value={this.state.experience.startDate} 
                    type="text" 
                    id="startDateInput"
                />
              </label>

              <label htmlFor= "endDateInput">End date: 
                <input
                    name="endDate"
                    onChange={this.handleExperienceChange}
                    value={this.state.experience.endDate}  
                    type="text" 
                    id="endDateInput"
                />
              </label>

              <label htmlFor= "responsibilitiesInput">Details:
                  <textarea 
                      name="responsibilities"
                      onChange={this.handleExperienceChange}
                      value={this.state.experience.responsibilities} 
                      // type="textarea" 
                      id="responsibilitiesInput"
                  />  
                </label>

             

              <button>Add</button>
            </form>
          </div>

          <div className="bodyOutput">
            {/* <h2>Personal info</h2> */}
            <PersonalOutput personalCurrent={personalCurrent} />
            <h3>Education:</h3>
            <EducationOutput 
              editEducationEntry={this.editEducationEntry.bind(this)} 
              deleteEducationEntry={this.deleteEducationEntry.bind(this)} 
              educationEntries={educationEntries}
            />
            <h3>Experience:</h3>
            <ExperienceOutput 
              editExperienceEntry={this.editExperienceEntry.bind(this)} 
              deleteExperienceEntry={this.deleteExperienceEntry.bind(this)} 
              experienceEntries={experienceEntries}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;