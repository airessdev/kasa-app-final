import "./AboutBanner.css";

const AboutBanner = ({ imageSrc }) => {
    const myStyle = {

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: " darken, luminosity"




    };
    return (
        <div className="aboutbanner" style={myStyle}>
            <h1 className="aboutbanner-text"></h1>
        </div>
    );
};

export default AboutBanner;
