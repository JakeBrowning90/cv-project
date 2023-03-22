import React from "react";

const PersonalOutput = (props) => {
    // Gets personalCurrent object from props
    const { personalCurrent } = props;

    // Display each attribute in personalCurrent
    return (
        <div className="personalOutputDiv">
            {/* Personal info goes here */}
            <ul>
                <li>{personalCurrent.username}</li>
                <li>{personalCurrent.phone}</li>
                <li>{personalCurrent.email}</li>
                <li>{personalCurrent.website}</li>
            </ul>
        </div>
    );
};

export default PersonalOutput;