//Displays tasks

import React from "react";

const Education = (props) => {
    // Gets tasks array from props
    const { tasks } = props;

    // For each task in array, creates an <li>
    return (
        <div className="educationEntryDiv">
        <label htmlFor= "schooInput">School: </label>
        <input 
            type="text" 
            id="schooInput"
        />

        <label htmlFor= "majorInput">Major: </label>
        <input 
            type="text" 
            id="majorInput"
        />

        <label htmlFor= "degreeInput">Degree: </label>
        <input 
            type="text" 
            id="degreeInput"
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

export default Education;