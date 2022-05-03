import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    img: 'https://i.imgur.com/vBUhNTX.png',
    name: 'Pokemon App (GAME)',
    tags: ['HTML', 'CSS', 'VueJs'],
    description: 'Juego interactivo de Pokemon usando la api de Poke.api',
    code: 'https://github.com/ValentinOsvaldo/vue-pokemon-app',
    demo: 'https://valentin-pokemon-app.netlify.app/',
  },
  {
    id: 2,
    img: 'https://i.imgur.com/F2pZNAL.png',
    name: 'Gif Expert App',
    tags: ['HTML', 'CSS', 'React'],
    description: 'Proyecto usando api de Giphy',
    code: 'https://github.com/ValentinOsvaldo/gif-expert-app',
    demo: 'https://valentinosvaldo.github.io/gif-expert-app/',
  },
  {
    id: 3,
    img: 'https://github.com/ValentinOsvaldo/interior-consultant-challenge/raw/main/src/assets/screenshot.png',
    name: 'Interior Consultant - Challenge',
    tags: ['HTML', 'CSS', 'Javascript'],
    description: 'Proyecto parte de un proyecto de challenge para desarrolladores. Static page creada con HTML, CSS  y javascript.',
    code: 'https://github.com/ValentinOsvaldo/interior-consultant-challenge',
    demo: 'https://valentinosvaldo.github.io/interior-consultant-challenge/',
  },
  {
    id: 4,
    img: 'https://camo.githubusercontent.com/4b81790a2cf520ff854b595f6b4985b8534adfd2933f88879548e9afd2d3b133/68747470733a2f2f692e696d6775722e636f6d2f43303835636c652e706e67',
    name: '404 Not Found - Challenge',
    tags: ['HTML', 'CSS'],
    description: '',
    code: 'https://github.com/ValentinOsvaldo/404-Not-Found',
    demo: 'https://valentinosvaldo.github.io/404-Not-Found/',
  },
  {
    id: 5,
    img: 'https://camo.githubusercontent.com/4a3a8d5aaeb8d15e640ea3c1892f2d606d0c7f5aaf863e3c2c61b684e58c3716/68747470733a2f2f692e696d6775722e636f6d2f6473564f3472592e706e67',
    name: 'My Team Page - Challenge',
    tags: ['HTML', 'CSS'],
    description: '',
    code: 'https://github.com/ValentinOsvaldo/my-team-page',
    demo: 'https://valentinosvaldo.github.io/my-team-page/',
  },
];

export const Projects = () => {
  return (
    <div className="projects__container">
      <div className="project__header">
        <h3>Proyectos ({projects.length})</h3>
      </div>

      <div className="projects__list">
        {projects.map(({ id, img, name, tags, code, demo, description }) => (
          <ProjectCard
            key={id}
            img={img}
            name={name}
            tags={tags}
            code={code}
            demo={demo}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
