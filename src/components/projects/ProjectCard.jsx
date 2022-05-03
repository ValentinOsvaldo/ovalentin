export const ProjectCard = ({
  img,
  name,
  tags = [],
  description,
  code,
  demo,
}) => {
  return (
    <div className="project__card">
      <div className="project__card-img">
        <img
          src={
            img === ''
              ? 'https://miro.medium.com/max/1400/1*2C2Sl-GlJV7ki9eTv59Sgw.jpeg'
              : img
          }
          alt="project image"
        />
      </div>
      <div className="project__card-body">
        <div className="project__tags">
          {tags.map((tag, key) => (
            <span className="project-tag" key={key}>
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="project__name">{name}</h3>
        <p className="project__description">{description}</p>
        <div className="project__links">
          <a href={demo} className="btn-primary">
            Demo
          </a>
          <a href={code} className="btn-primary">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
