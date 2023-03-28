import React from "react";

const EducationOutput = (props) => {
    // Gets educationEntries array from props
    const {  deleteEducationEntry, editEducationEntry, educationEntries } = props;
    

    // For each education object in array, creates an <li> (Style each entry into a div later)
    return (
        <div className="educationOutputDiv">
            {/* Education info goes here */}
            <ul>
            {educationEntries.map((education) => {
                return <li key={education.id} className="entryDiv">
                    
                    <div className="entryHeader">{education.degree}, {education.major}</div>
                    <div className="entryLocale">{education.school}, {education.location}</div>
                    <div className="entryDates">{education.startDate} - {education.endDate}</div>
                    <div className="entryDetails">{education.details}</div>
                    <div></div>
                    <div className="entryButtons"> 
                        <button onClick={() => editEducationEntry(education.id)}>
                        Edit
                        </button>
                        <button onClick={() => deleteEducationEntry(education.id)}>
                        Delete
                        </button>
                    </div>
  
                </li>;
            })}
        </ul>
        </div>
    );
};

export default EducationOutput;