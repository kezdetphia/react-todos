import logo from './logo.svg';
import './App.css';
import SkillsList from './SkillsList';
import {useState} from 'react';

function App() {
  
  const [showSkillsList, setshowSkillsList] = useState(true)
  const [skills, setSkills] =useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]
  )

  const addSkill=(newSkill)=>{
    setSkills([...skills, newSkill])
  }
  
  return (
    <div className="App">
      <h1>React Dev Skills </h1>
       {showSkillsList &&  <SkillsList skills={skills} addSkill={addSkill} />}
     
    </div>
  );
}

export default App;
