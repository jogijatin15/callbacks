import React, { useState } from 'react';
import School from './School';

import College from './College';

const Enginnering = () => {

    const [schoolName, setSchoolName] = useState("Carmel");

    const executeCallBack = (newName) => {
        console.log("newName", newName);
        const { school, city, state } = newName;
        setSchoolName(`${school}, ${city}, ${state}`);
    }

    return (
        <div>
            <p>Engineering - <strong>John Hopkins University</strong></p>
            {/* <School 
                schoolName={schoolName}
                handleSchoolClick={executeCallBack}
            /> */}
            
            <College
                schoolName={schoolName}
                handleSchoolClick={executeCallBack}
            />
        </div>
    )
}

export default Enginnering;