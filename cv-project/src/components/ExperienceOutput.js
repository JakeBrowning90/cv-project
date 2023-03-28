//Displays tasks
import React from "react";

const ExperienceOutput = (props) => {
    // Gets educationEntries array from props
    const {  deleteExperienceEntry, editExperienceEntry, experienceEntries } = props;
    

    // For each education object in array, creates an <li> (Style each entry into a div later)
    return (
        <div className="experienceOutputDiv">
            {/* Experience info goes here */}
            <ul>
            {experienceEntries.map((experience) => {
                return <li key={experience.id} className="entryDiv">

                    <div className="entryHeader">{experience.position}</div>
                    <div className="entryLocale">{experience.organization}, {experience.location}</div>
                    <div className="entryDates">{experience.startDate} - {experience.endDate}</div>
                    <div className="entryDetails">{experience.responsibilities}</div>
                    <div></div>
                    <div className="entryButtons">
                        <button onClick={() => editExperienceEntry(experience.id)}>
                            Edit
                        </button>
                        <button onClick={() => deleteExperienceEntry(experience.id)}>
                            Delete
                        </button>
                    </div>

                </li>;
            })}
        </ul>
        </div>
    );
};

export default ExperienceOutput;