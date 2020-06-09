import React from 'react';
import School from './School';

const College = (props) => {

    const { schoolName, handleSchoolClick } = props;

    return(
        <div>
            <p>College - <strong>LSU College</strong></p>
            <School 
                schoolName={schoolName}
                handleSchoolClick={handleSchoolClick}
            />
            {/* <School {...props} /> */}
        </div>
        
    )
}

export default College;