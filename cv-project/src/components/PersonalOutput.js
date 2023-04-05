import React from "react";

const PersonalOutput = (props) => {
    // Gets personalCurrent object from props
    const { currentPersonal } = props;

    // Display each attribute in personalCurrent
    return (
        <div className="personalOutputDiv">
            {/* Personal info goes here */}
            <div className="nameOutput">{currentPersonal.username}</div>
            <div>Phone: {currentPersonal.phone} | Email: {currentPersonal.email}</div>
            <div>Web: {currentPersonal.website}</div>
        </div>
    );
};

export default PersonalOutput;