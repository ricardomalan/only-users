// eslint-disable-next-line no-unused-vars
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.name.first}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.email}</h6>
        <p className="card-text">{props.user.gender}</p>
      </div>
    </div>
  );
};

export default Card;
