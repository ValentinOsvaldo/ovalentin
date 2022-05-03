import { SkillItem } from "./SkillItem";

export const SkillList = ({ list = [] }) => {
  return (
    <div className="skills__list">
      {list.map(({ id, name, value }) => (
        <SkillItem key={id} language={name} value={value} />
      ))}
    </div>
  );
};
