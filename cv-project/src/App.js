//Contains logic and manages state

import React, { useState } from "react";
import './styles/reset.css';
import './styles/styles.css';
//Package to create unique ids as object keys
import uniqid from "uniqid";
import PersonalOutput from "./components/PersonalOutput";
import EducationOutput from "./components/EducationOutput";
import ExperienceOutput from "./components/ExperienceOutput";

const App = () => {

   //personal
   const[personal, setPersonal] = useState({
    username:'',
    phone:'',
    email:'',
    website:'',
  });
  //personalCurrent
  const[currentPersonal, setCurrentPersonal] = useState({
    username:'',
    phone:'',
    email:'',
    website:'',
  });
  //education
  const[education, setEducation] = useState({
    school: '',
    location: '',
    major: '',
    degree: '',
    details: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
  });

  //educationEntries
  const[educationEntries, setEducationEntries] = useState([]);
  //experience
  const[experience, setExperience] = useState({
    position: '',
    organization: '',
    location: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
    });
  //experienceEntries
  const[experienceEntries, setExperienceEntries] = useState([]);


  //Toggle form view functions

  //handleChange functions
  const handlePersonalChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setPersonal((personal) => {
      return {
        ...personal,   // Spread Operator               
        [name]: value
      }
    })
  }

  const handleEducationChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setEducation((education) => {
      return {
        ...education,   // Spread Operator               
        [name]: value
      }
    })
  }

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setExperience((experience) => {
      return {
        ...experience,   // Spread Operator               
        [name]: value
      }
    })
  }

  //onSubmit functions
  const onSubmitPersonal = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state:
    setCurrentPersonal(personal);
  }

  // onSubmit handler for form
  const onSubmitEducation = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();

    //Check if education key is already in use
    const replaceEntry = educationEntries.find(entry => entry.id == education.id);

    //if key isn't already in use, add new entry to array 
    if (replaceEntry == undefined) {
      setEducationEntries(
        // Add current education form inputs to an object, add the object to an array to be read by the component
        educationEntries.concat(education),
      );
    }
    else {
      // Insert modified entry back into array
      const replaceIndex = educationEntries.indexOf(replaceEntry)
      const editedArray = [...educationEntries.slice(0,replaceIndex ), education, ...educationEntries.slice(replaceIndex + 1)]
      setEducationEntries(
        editedArray,
      );
    }
    // Clear out the input fields, prepare next ID
    setEducation({
      school : '',
      location: '',
      major : '',
      degree : '',
      details: '',
      startDate : '',
      endDate : '',
      id: uniqid(),
    });
  };

  // onSubmit handler for form
  const onSubmitExperience = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();

    //Check if education key is already in use
    const replaceEntry = experienceEntries.find(entry => entry.id == experience.id);

    //if key isn't already in use, add new entry to array 
    if (replaceEntry == undefined) {
      setExperienceEntries(
        // Add current education form inputs to an object, add the object to an array to be read by the component
        experienceEntries.concat(experience),
      );
    }
    else {
      // Insert modified entry back into array
      const replaceIndex = experienceEntries.indexOf(replaceEntry)
      const editedArray = [...experienceEntries.slice(0,replaceIndex ), experience, ...experienceEntries.slice(replaceIndex + 1)]
      setExperienceEntries(
        editedArray,
      );
    }
    // Clear out the input fields, prepare next ID
    setExperience({
      position: '',
      organization: '',
      location: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      id: uniqid(),
    });
  };

  //deleteEntry functions
  const deleteEducationEntry = (id) => {
    // const educationEntries = educationEntries.filter(entry => entry.id !== id);
    setEducationEntries( educationEntries.filter(entry => entry.id !== id) );
  };

  const deleteExperienceEntry = (id) => {
    // const educationEntries = educationEntries.filter(entry => entry.id !== id);
    setExperienceEntries( experienceEntries.filter(entry => entry.id !== id) );
  };

  //editEntry functions
  const editEducationEntry = (id) => {
    const updatedEntry = educationEntries.find(entry => entry.id == id);
    setEducation({
        school: updatedEntry.school,
        location: updatedEntry.location,
        major: updatedEntry.major,
        degree: updatedEntry.degree,
        details: updatedEntry.details,
        startDate:  updatedEntry.startDate,
        endDate:  updatedEntry.endDate,
        id: updatedEntry.id,
    });
  };

  const editExperienceEntry = (id) => {
    const updatedEntry = experienceEntries.find(entry => entry.id == id);
    setExperience({ 
      position: updatedEntry.position,
      organization: updatedEntry.organization,
      location: updatedEntry.location,
      responsibilities: updatedEntry.responsibilities,
      startDate:  updatedEntry.startDate,
      endDate:  updatedEntry.endDate,
      id: updatedEntry.id,
    });
  };

  const togglePersonalForm = () => {
    const form = document.getElementById("personalEntryForm");

    if (form.classList.contains("visibleForm")) {
      form.classList.remove("visibleForm");
      form.classList.add("hiddenForm");
    }
    else {
      form.classList.remove("hiddenForm");
      form.classList.add("visibleForm");
    }
  }

  const toggleEducationForm=() => {
    const form = document.getElementById("educationEntryForm");

    if (form.classList.contains("visibleForm")) {
      form.classList.remove("visibleForm");
      form.classList.add("hiddenForm");
    }
    else {
      form.classList.remove("hiddenForm");
      form.classList.add("visibleForm");
    }
  }

   const toggleExperienceForm = () => {
    const form = document.getElementById("experienceEntryForm");

    if (form.classList.contains("visibleForm")) {
      form.classList.remove("visibleForm");
      form.classList.add("hiddenForm");
    }
    else {
      form.classList.remove("hiddenForm");
      form.classList.add("visibleForm");
    }
  }

    return (
      <div className="fullPage">
        <div className="pageHeading">
          <div className="titleArea">
            <h1>
              CV Builder
            </h1>
            <h2>
              Made by Jake Browning<br/>
              for The Odin Project, 2023
            </h2>
          </div>
          <div className="instructionArea">
            <ul>
              <li>Use the forms on the left to add infomation to your CV.</li>
              <li>Click "Edit" to make changes to an existing entry without removing it.</li>
            </ul>
          </div>
        </div>
        <div className="bodyWhole">
          <div className="bodyForms">
            <div id="personalFormHeader" className="formAreaHeader">
              <h2>Add Personal info:</h2>
              <button onClick={togglePersonalForm}>
                Show/Hide
              </button>
            </div>
            {/* Form for Personal info input */}
            <form id="personalEntryForm" className="hiddenForm" onSubmit={onSubmitPersonal}>
              <div className="formInput">
              <label htmlFor= "nameInput" >Name: 
                  <input 
                      name="username"
                      onChange={handlePersonalChange}
                      value={personal.username}
                      type="text" 
                      id="nameInput"
                      required
                  />
                </label>
              </div>
              <div className="formInput">
              <label htmlFor= "phoneInput">Phone number: 
                  <input 
                      name="phone"
                      onChange={handlePersonalChange}
                      value={personal.phone}
                      type="text" 
                      id="phoneInput"
                      required
                  />
                </label>
              </div>
              <div className="formInput">
              <label htmlFor= "emailInput">Email address:
                  <input 
                      name="email"
                      onChange={handlePersonalChange}
                      value={personal.email}
                      type="text" 
                      id="emailInput"
                      required
                  />
                </label>
              </div>
              <div className="formInput">
              <label htmlFor= "websiteInput">Website: 
                <input 
                    name="website"
                    onChange={handlePersonalChange}
                    value={personal.website}
                    type="text" 
                    id="websiteInput"
                    required
                />
              </label>
              </div>
 
              <button>Update</button>
            </form>

            <div id="educationFormHeader" className="formAreaHeader">
              <h2>Add Education:</h2>
              <button onClick={toggleEducationForm}>
                Show/Hide
              </button>
            </div>
            {/* Form for Education info input */}
            <form id="educationEntryForm" className="hiddenForm" onSubmit={onSubmitEducation}>

              <div className="formInput">
                <label htmlFor= "schoolInput">School:
                  <input
                      name="school"
                      onChange={handleEducationChange}
                      value={education.school} 
                      type="text" 
                      id="schoolInput"
                      required
                  />
                </label>
              </div>

              <div className="formInput">
                <label htmlFor="locationInput">Location:
                  <input
                      name="location"
                      onChange={handleEducationChange}
                      value={education.location} 
                      type="text" 
                      id="locationInput"
                      required
                  />
                </label>
              </div>
              <div className="formInput">
                <label htmlFor= "majorInput">Major / Area of study:
                  <input 
                      name="major"
                      onChange={handleEducationChange}
                      value={education.major} 
                      type="text" 
                      id="majorInput"
                      required
                  />
                 </label>
              </div>
              <div className="formInput">
                <label htmlFor= "degreeInput">Degree / Certification:
                  <input 
                      name="degree"
                      onChange={handleEducationChange}
                      value={education.degree} 
                      type="text" 
                      id="degreeInput"
                      required
                  />  
                </label>
              </div>
      
              <label htmlFor= "startDateInput">Start date: 
                  <input 
                      name="startDate"
                      onChange={handleEducationChange}
                      value={education.startDate} 
                      type="text" 
                      id="startDateInput"
                      required
                  />
                </label>

                <label htmlFor= "endDateInput">End date: 
                  <input 
                      name="endDate"
                      onChange={handleEducationChange}
                      value={education.endDate}                 
                      type="text" 
                      id="endDateInput"
                      required
                  />
                </label>
              <div className="formInput">
              <label htmlFor= "educationDetailsInput">Details:
                  <textarea 
                      name="details"
                      onChange={handleEducationChange}
                      value={education.details} 
                      // type="textarea" 
                      id="detailsInput"
                      placeholder="Awards, courses, extracurriculars, etc."
                  />  
                </label>
              </div>

              <button>Add</button>
            </form>

            <div id="experienceFormHeader"  className="formAreaHeader">
              <h2>Add Experience:</h2>
              <button onClick={toggleExperienceForm}>
                Show/Hide
              </button>
            </div>
            {/* Form for Experience info input */}
            <form id="experienceEntryForm" className="hiddenForm" onSubmit={onSubmitExperience}>

            <div className="formInput">
            <label htmlFor= "positionTitleInput">Position:
                <input
                    name="position"
                    onChange={handleExperienceChange}
                    value={experience.position}  
                    type="text" 
                    id="positionTitleInput"
                    required
                />
              </label>
            </div>
              <div className="formInput">
                <label htmlFor= "organizationInput">Organization: 
                  <input 
                      name="organization"
                      onChange={handleExperienceChange}
                      value={experience.organization}  
                      type="text" 
                      id="organizationInput"
                      required
                  />
                </label>
              </div>
              <div className="formInput">
                <label htmlFor= "locationInput">Location: 
                  <input 
                    name="location"
                    onChange={handleExperienceChange}
                    value={experience.location}  
                    type="text" 
                    id="locationInput"
                    required
                  />
                </label>
              </div>
              <label htmlFor= "startDateInput">Start date: 
                <input 
                    name="startDate"
                    onChange={handleExperienceChange}
                    value={experience.startDate} 
                    type="text" 
                    id="startDateInput"
                    required
                />
              </label>

              <label htmlFor= "endDateInput">End date: 
                <input
                    name="endDate"
                    onChange={handleExperienceChange}
                    value={experience.endDate}  
                    type="text" 
                    id="endDateInput"
                    required
                />
              </label>

              <div className="formInput">
                <label htmlFor= "responsibilitiesInput">Details:
                  <textarea 
                      name="responsibilities"
                      onChange={handleExperienceChange}
                      value={experience.responsibilities} 
                      id="responsibilitiesInput"
                      placeholder="Duties, accomplishments, recognition, etc."
                      required
                  />  
                </label>  
              </div>

              <button>Add</button>
            </form>

          </div>

          <div className="bodyOutput">
            {/* <h2>Personal info</h2> */}
            <PersonalOutput currentPersonal={currentPersonal} />
            <div className="cvSection">
              <h2>Education:</h2>
            </div>
            <EducationOutput 
              editEducationEntry={editEducationEntry} 
              deleteEducationEntry={deleteEducationEntry} 
              educationEntries={educationEntries}
            />
            
            <div className="cvSection">
              <h2>Experience:</h2>
            </div>
            <ExperienceOutput 
              editExperienceEntry={editExperienceEntry} 
              deleteExperienceEntry={deleteExperienceEntry} 
              experienceEntries={experienceEntries}
            />
            <div className="cvSection">
              <h2>References available upon request</h2>
            </div>
          </div>

        </div>
      </div>
    );
  }


export default App;