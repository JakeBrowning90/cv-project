//Displays tasks

import React from "react";

const PersonalEntry = (props) => {
    // Gets tasks array from props
    const { tasks } = props;

    // For each task in array, creates an <li>
    return (
        <div className="personalEntryDiv">
            <label htmlFor= "nameInput">Name: </label>
            <input 
                type="text" 
                id="nameInput"
            />

            <label htmlFor= "phoneInput">Phone number: </label>
            <input 
                type="text" 
                id="phoneInput"
            />

            <label htmlFor= "emailInput">Email address: </label>
            <input 
                type="text" 
                id="emailInput"
            />

            <label htmlFor= "websiteInput">Website: </label>
            <input 
                type="text" 
                id="websiteInput"
            />

            <button>Save</button>
        </div>
    );
};

export default PersonalEntry;