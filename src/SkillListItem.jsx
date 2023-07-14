import './SkillsListItem.css';

const SkillListItem = ({ skill }) => {
  return (
    <div className="SkillListItem">
      <ul>
        <li>
          <span className="SkillName">{skill.name}</span>
            -
          <span className="SkillLevel">Level: {skill.level}</span>
        </li>
      </ul>
    </div>
  );
};

export default SkillListItem;


