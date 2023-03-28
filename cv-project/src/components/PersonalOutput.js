import React from "react";

const PersonalOutput = (props) => {
    // Gets personalCurrent object from props
    const { personalCurrent } = props;

    // Display each attribute in personalCurrent
    return (
        <div className="personalOutputDiv">
            {/* Personal info goes here */}
            <div className="nameOutput">{personalCurrent.username}</div>
            <div>Phone: {personalCurrent.phone} | Email: {personalCurrent.email}</div>
            <div>Web: {personalCurrent.website}</div>
        </div>
    );
};

export default PersonalOutput;