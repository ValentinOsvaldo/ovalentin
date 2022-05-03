import { SkillList } from './SkillList';

const front = [
  {
    id: 1,
    name: 'HTML',
    value: 100
  },
  {
    id: 2,
    name: 'CSS',
    value: 90
  },
  {
    id: 3,
    name: 'Javascript',
    value: 80
  },
  {
    id: 4,
    name: 'React',
    value: 50
  },
]

const back = [
  {
    id: 1,
    name: 'NodeJs',
    value: 50
  },
  {
    id: 2,
    name: 'PHP',
    value: 75
  },
]

const design = [
  {
    id: 1,
    name: 'Figma',
    value: 90
  },
  {
    id: 2,
    name: 'Adobe XD',
    value: 90
  },
]

const other = [
  {
    id: 1,
    name: 'Git + GitHub',
    value: 100
  },
]

export const Skills = () => {
  return (
    <div className="skills__container">
      <div className="skill__card">
        <h3>Front End</h3>
        <SkillList list={ front } />
      </div>

      <div className="skill__card">
        <h3>Back end</h3>
        <SkillList list={ back } />
      </div>

      <div className="skill__card">
        <h3>Design UI/UX</h3>
        <SkillList list={ design } />
      </div>

      <div className="skill__card">
        <h3>Others</h3>
        <SkillList list={ other } />
      </div>
    </div>
  );
};
