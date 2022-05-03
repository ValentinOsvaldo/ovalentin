import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    img: '',
    name: 'Pokemon App (GAME)',
    tags: ['HTML', 'CSS', 'VueJs'],
    description: '',
    code: 'https://github.com/ValentinOsvaldo/vue-pokemon-app',
    demo: 'https://valentin-pokemon-app.netlify.app/',
  },
  {
    id: 2,
    img: '',
    name: 'Gif Expert App',
    tags: ['HTML', 'CSS', 'React'],
    description: '',
    code: 'https://github.com/ValentinOsvaldo',
    demo: 'https://github.com',
  },
];

export const Projects = () => {
  return (
    <div className="projects__container">
      <div className="project__header">Projects ({projects.length})</div>

      <div className="projects__list">
        {projects.map(({ id, img, name, tags, code, demo }) => (
          <ProjectCard
            key={id}
            img={img}
            name={name}
            tags={tags}
            code={code}
            demo={demo}
          />
        ))}
      </div>
    </div>
  );
};
