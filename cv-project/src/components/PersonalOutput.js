//Displays tasks

import React from "react";

const PersonalOutput = (props) => {
    // Gets tasks array from props
    const { tasks } = props;

    // For each task in array, creates an <li>
    return (
        <div className="personalOutputDiv">
            Personal info goes here
        </div>
    );
};

export default PersonalOutput;