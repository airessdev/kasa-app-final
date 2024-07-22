import './CollapseMenu.css'
import { useState } from 'react'
import icon from '../../assets/images/arrow-prev.png'


const CollapseMenu = (props) => {
    const defaultStyleicon = { transform: 'rotate(0deg)', transition: 'transform 0.2s ease' }
    const [ouverture, setouverture] = useState(false)
    //fermer par defaut
    const [styleicon, setstyleicon] = useState(defaultStyleicon)



    return (


        <div className="collapseMenu">

            <div className="collapseMenuTitle">
                {props.title}
                <img src={icon} alt=""
                    style={styleicon}


                    onClick={() => {
                        setouverture(!ouverture)
                        if (ouverture){
                            setstyleicon(defaultStyleicon)
                        }
                        else{
                            setstyleicon({ transform: 'rotate(180deg)',transition: 'transform 0.2s ease' })
                        }
                        console.log(ouverture)

                    }} />
            </div>


            {ouverture && <div className="collapseMenuContent">
                {props.content}
            </div>}


        </div>




    )
}

export default CollapseMenu;