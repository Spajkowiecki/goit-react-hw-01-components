import './Media.css';

const Media = props => {
  const { title, value } = props;
  return (
    <div className="media">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default Media;
