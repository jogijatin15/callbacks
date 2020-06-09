import React from 'react';

const School = (props) => {
    const { schoolName, handleSchoolClick } = props;
    const schoolDetails = {
        school: "Mount Carmel High School",
        city: "Warwick",
        state: "Scantor"
    }

    return (
        <div>
            <span>School - <strong>{schoolName}</strong></span>
            <button id="school-button" onClick={() => handleSchoolClick({...schoolDetails})}>School</button>
        </div>
    )

}

export default School;