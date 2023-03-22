//Displays tasks

import React from "react";

const ExperienceOutput = (props) => {
    // Gets tasks array from props
    const { tasks } = props;

    // For each task in array, creates an <li>
    return (
        <div className="experienceOutputDiv">
            Experience info goes here
        </div>
    );
};

export default ExperienceOutput;