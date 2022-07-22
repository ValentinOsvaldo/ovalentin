import { Experience } from './components/experience/Experience';
import { Hobbies } from './components/hobbies/Hobbies';
import { Navbar } from './components/navbar/Navbar';
import { CardDetails } from './components/personal-card/CardDetails';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills-cards/Skills';

export const App = () => {
  return (
    <>
      <Navbar />
      <main className="main__container">
        <aside className='aside__container'>
          <CardDetails />
          <Experience />
        </aside>
        <section className='content__wrapper'>
          <Skills />
          <Projects />
        </section>
      </main>
    </>
  );
};
