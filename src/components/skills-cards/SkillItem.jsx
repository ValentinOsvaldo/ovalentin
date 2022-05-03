export const SkillItem = ({ language, value }) => {
  return (
    <div className="skill__item">
      {language}
      <progress min="0" value={value} max="100"></progress>
    </div>
  );
};
