import "./Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="housing-tags">
      {tags.map((tag, tagIndex) => (
        <div className="tag-container" key={tagIndex}>
        <p key={tagIndex} className="tag">

          {tag}
        </p>
        </div>
      ))}
    </div>
  );
};

export default Tags;
