import './NewSkillForm.css';
import {useState} from 'react';

const NewSkillForm=({addSkill})=>{

  const [skillLevel, setskillLevel]=useState({
    name: '',
    level: 3
  })

  const handleChange=(e)=>{
    const newskillLevel = {...skillLevel, [e.target.name]: e.target.value}
    setskillLevel(newskillLevel)  
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    addSkill(skillLevel);
    setskillLevel({ name: '', level: 3 });
  }
  
  return(
      <form onSubmit={handleSubmit} className="NewSkillForm">
        <label>Skill  </label>
        <input onChange={handleChange} name='name' value={skillLevel.name} type="text"/>
        <label >Level </label>
        <select onChange={handleChange} name='level' value={skillLevel.level}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type='submit'>ADD SKILL</button>
      </form>
  )
}

export default NewSkillForm;