import { HobbieCard } from './HobbieCard';

const hobbies = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'Gaming',
    desc: 'Me gusta mucho jugar en mi PC',
  },
  {
    id: 2,
    img: 'https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png',
    name: 'Series, peliculas y anime',
    desc: 'Disfruto mucho de ver series, peliculas y de vez en cuando anime en mis tiempos de relajación',
  },
];

export const Hobbies = () => {
  return (
    <div className="hobbies__container">
      <h3>Hobbies</h3>

      <div className="hobbies__list">
        {hobbies.map((hobby) => (
          <HobbieCard
            key={hobby.id}
            img={hobby.img}
            name={hobby.name}
            desc={hobby.desc}
          />
        ))}
      </div>
    </div>
  );
};
