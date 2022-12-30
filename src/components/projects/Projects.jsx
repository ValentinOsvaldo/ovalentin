import { ProjectCard } from './ProjectCard';

const projects = [
  {
    img: 'https://i.imgur.com/pRHKh1Q.png',
    name: 'Calendar App',
    tags: ['HTML', 'CSS', 'React', 'NodeJs'],
    description: 'Crea eventos calendarizados, cuenta con login y registro de usuarios',
    code: 'https://github.com/ValentinOsvaldo/calendar-react',
    demo: 'https://mern-calendar-valentin.herokuapp.com/auth/login',
  },
  {
    img: 'https://camo.githubusercontent.com/735581767b197d8cd0424b714f98b2fe7b8ef04e0df55dc8b5b4590557fabb77/68747470733a2f2f692e696d6775722e636f6d2f6d526530724b6f2e706e67',
    name: 'Weather App',
    tags: ['HTML', 'CSS', 'React'],
    description: 'Aplicación de clima',
    code: 'https://github.com/ValentinOsvaldo/react-weather-app',
    demo: 'https://weather-app-valentinosvaldo.vercel.app/',
  },
  {
    img: 'https://github.com/ValentinOsvaldo/todo-app/raw/main/src/ss.png',
    name: 'Todo App',
    tags: ['HTML', 'CSS', 'React'],
    description: '',
    code: 'https://github.com/ValentinOsvaldo/todo-app',
    demo: 'https://todo-app-lyart-chi.vercel.app/#/',
  },
  {
    img: 'https://i.imgur.com/vBUhNTX.png',
    name: 'Pokemon App (GAME)',
    tags: ['HTML', 'CSS', 'VueJs'],
    description: 'Juego interactivo de Pokemon usando la api de Poke.api',
    code: 'https://github.com/ValentinOsvaldo/vue-pokemon-app',
    demo: 'https://valentin-pokemon-app.netlify.app/',
  },
];

export const Projects = () => {
  return (
    <div className="projects__container">
      <div className="project__header">
        <h3>Proyectos ({projects.length})</h3>
      </div>

      <div className="projects__list">
        {projects.map(({ img, name, tags, code, demo, description }) => (
          <ProjectCard
            key={name}
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
