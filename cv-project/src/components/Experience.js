//Displays tasks

import React from "react";

const Experience = (props) => {
    // Gets tasks array from props
    const { tasks } = props;

    // For each task in array, creates an <li>
    return (
        <div className="experienceEntryDiv">
        <label htmlFor= "positionTitleInput">Position: </label>
        <input 
            type="text" 
            id="positionTitleInput"
        />

        <label htmlFor= "organizationInput">Organization: </label>
        <input 
            type="text" 
            id="organizationInput"
        />

        <label htmlFor= "responsibilitiesInput">Responsibilities: </label>
        <input 
            type="textarea" 
            id="responsibilitiesInput"
        />

        <label htmlFor= "startDateInput">Start date: </label>
        <input 
            type="text" 
            id="startDateInput"
        />

        <label htmlFor= "endDateInput">End date: </label>
        <input 
            type="text" 
            id="endDateInput"
        />

        <button>Save</button>
    </div>
    );
};

export default Experience;