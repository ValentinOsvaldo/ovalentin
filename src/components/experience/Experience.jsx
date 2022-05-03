import { ExperienceCard } from './ExperienceCard';

const experience = [
  {
    id: 1,
    name: 'AETO',
    dateStart: '2022',
    dateEnd: '',
    desc: '',
    img: 'https://media-exp1.licdn.com/dms/image/C4E0BAQG9a6Cmqek9_A/company-logo_200_200/0/1617662731007?e=2147483647&v=beta&t=g80kouKa3LcRfDzlijyfSlJoUfMzJPns_0Y88jd8cJ0',
  },
  {
    id: 2,
    name: 'Golden TI',
    dateStart: '2019',
    dateEnd: '2022',
    desc: '',
    img: 'https://media-exp1.licdn.com/dms/image/C560BAQFiQRFh6Nl5kw/company-logo_200_200/0/1566335194286?e=2147483647&v=beta&t=oGDtZ-SCGI087qkiMO7KO1SiCmvIPyuN12gWB6TSsuk',
  },
];

export const Experience = () => {
  return (
    <div className="experience__card">
      <h3>Experience</h3>

      <div className="experience__list">
        {experience.map(({ id, img, name, dateStart, dateEnd, desc }) => (
          <ExperienceCard
            key={id}
            img={img}
            name={name}
            dateStart={dateStart}
            dateEnd={dateEnd}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};
