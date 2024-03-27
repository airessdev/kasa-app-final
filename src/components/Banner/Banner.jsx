import "./Banner.css";

const Banner = ({ imageSrc }) => {
  const myStyle = {

    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundBlendMode: "darken",



  };
  return (
    <div className="banner" style={myStyle}>
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
