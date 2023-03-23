import React from "react";

const EducationOutput = (props) => {
    // Gets educationEntries array from props
    const { educationEntries } = props;

    // For each education object in array, creates an <li> (Style each entry into a div later)
    return (
        <div className="educationOutputDiv">
            Education info goes here
            <ul>
            {educationEntries.map((education) => {
                return <li key={education.id}>
                    {education.school}, 
                    {education.major}, 
                    {education.degree}, 
                    {education.startDate}, 
                    {education.endDate}
                    {/* TODO: let user delete entries */}
                    <button>Delete</button>
                </li>;
            })}
        </ul>
        </div>
    );
};

export default EducationOutput;