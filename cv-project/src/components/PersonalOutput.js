//Displays tasks

import React from "react";

const PersonalOutput = (props) => {
    // Gets tasks array from props
    const { personalCurrent } = props;

    // For each task in array, creates an <li>
    return (
        <div className="personalOutputDiv">
            {/* Personal info goes here */}
            <ul>
                <li>{personalCurrent.name}</li>
                <li>{personalCurrent.phone}</li>
                <li>{personalCurrent.email}</li>
                <li>{personalCurrent.website}</li>
            </ul>
        </div>
    );
};

export default PersonalOutput;