import React from 'react'; //This aint needed above React 17
import SkillListItem from './SkillListItem';
import NewSkillForm from './NewSkillForm';


const SkillsList=({skills, addSkill})=>{
  return (
    <>
      <ul>
        {skills.map((skill ,idx)=>(
        <SkillListItem skill={skill} key={idx} />
        ))}
      </ul>
      <div>
        <NewSkillForm addSkill={addSkill} />
      </div>
    </>
  );
}

export default SkillsList;