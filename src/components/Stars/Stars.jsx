import "./Stars.css"
import starFullIcon from "../../assets/images/star-full.svg";
import starEmptyIcon from "../../assets/images/star-empty.svg"




const Stars = ({rating}) => {
    

    return (

        <div className="stars">
            {rating > 0 ? <img src={starFullIcon} alt="stars-full" /> : <img src={starEmptyIcon} alt="stars-empty" />}
            {rating > 1 ? <img src={starFullIcon} alt="stars-full" /> : <img src={starEmptyIcon} alt="stars-empty" />}
            {rating > 2 ? <img src={starFullIcon} alt="stars-full" /> : <img src={starEmptyIcon} alt="stars-empty" />}
            {rating > 3 ? <img src={starFullIcon} alt="stars-full" /> : <img src={starEmptyIcon} alt="stars-empty" />}
            {rating > 4 ? <img src={starFullIcon} alt="stars-full" /> : <img src={starEmptyIcon} alt="stars-empty" />}



        </div>)




}

export default Stars