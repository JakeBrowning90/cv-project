//Displays tasks

import React from "react";

const EducationOutput = (props) => {
    // Gets tasks array from props
    const { tasks } = props;

    // For each task in array, creates an <li>
    return (
        <div className="educationOutputDiv">
            Education info goes here
        </div>
    );
};

export default EducationOutput;