export const ExperienceCard = ({ img, name, dateStart, dateEnd, desc }) => {
  return (
    <div className="experience__item">
      <div className="experience__item-img">
        <img src={ img } alt="aeto logo" />
      </div>

      <div className="experience__item-body">
        <small className="dates">
          { dateStart } - { dateEnd === '' ? 'Actualmente' : dateEnd }
        </small>
        <h4>{ name }</h4>
        <p className="experience__desc">
          { desc }
        </p>
      </div>
    </div>
  )
}
