export const ExperienceCard = ({ img, name, dateStart, dateEnd, desc }) => {
  return (
    <div className="experience__item">
      <div className="experience__item-img">
        <img src={ img } alt="aeto logo" />
      </div>

      <div className="experience__item-body">
        <small className="dates">
          { dateStart } - { dateEnd === '' ? 'Today' : dateEnd }
        </small>
        <h4>{ name }</h4>
        <p>
          { desc }
        </p>
      </div>
    </div>
  )
}
