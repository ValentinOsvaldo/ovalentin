export const HobbieCard = ({ img, name, desc }) => {
  return (
    <div className="hobbie__card">
      <div className="hobbie__card-img">
        <img src={ img } alt={ name } />
      </div>
      <div className="hobbie__card-body">
        <h4>{ name }</h4>
        <small className="experience__desc">
          { desc }
        </small>
      </div>
    </div>
  );
};
