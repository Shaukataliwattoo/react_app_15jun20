import React from 'react';

function students (props) {
    return(
        <div>
            <h2>First Position : {props.student_name} </h2>
            <h2>Second Position : {props.student_name1}</h2>
        </div>
    )
}
export default students;