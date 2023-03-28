//Displays tasks
import React from "react";

const ExperienceOutput = (props) => {
    // Gets educationEntries array from props
    const {  deleteExperienceEntry, editExperienceEntry, experienceEntries } = props;
    

    // For each education object in array, creates an <li> (Style each entry into a div later)
    return (
        <div className="experienceOutputDiv">
            Experience info goes here
            <ul>
            {experienceEntries.map((experience) => {
                return <li key={experience.id}>
                    {experience.position}, 
                    {experience.organization}, 
                    {experience.responsibilities}, 
                    {experience.startDate}, 
                    {experience.endDate}
                    {/* TODO: let user edit entries */}
                    <button onClick={() => editExperienceEntry(experience.id)}>
                        Edit
                    </button>
                    <button onClick={() => deleteExperienceEntry(experience.id)}>
                        Delete
                    </button>
                </li>;
            })}
        </ul>
        </div>
    );
};

export default ExperienceOutput;