import React from 'react';
import './App.css';
import Students from './students.js';

function App() {
  return (
    <div> 
      <h1>Positions in AI Course</h1>
        <Students student_name = "Shaukat Ali" student_name1 = "Muhammad Irshad"/>
      <hr/>
      <h1>Position in IOT Course</h1>
        <Students student_name = "Muhammad Ahmed" student_name1 = "Mudassar Hanif"/>
        
    </div>
  );
}

export default App;
