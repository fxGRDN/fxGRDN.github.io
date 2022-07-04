import React from "react"
import './Portfolio.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { TCard } from '../Types/Card'
import slb_ico from '../../Assets/slb_ico.webp'
import eden_ico from '../../Assets/logo.webp'
import fg_ico from '../../Assets/iconv2.webp'
import nasa_ico from '../../Assets/naasa.png'


class Portfolio extends React.Component {

    render():React.ReactNode {
        return (
            <div className="Slide bg-black">
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <h2>
                        Moje prace
                    </h2>
                </div>
                <div className="card__">
                    <Card name="stylbram"  prevImg={slb_ico} link="https://stylbram.pl" />
                    <Card name="project eden"  prevImg={eden_ico} git="https://github.com/fxgrdn/eden" docker="https://hub.docker.com/repository/docker/fxgrdn/web-apps" />
                    <Card name="projekt szkolny" prevImg={fg_ico} git="https://github.com/fxgrdn/fullstack-school-project"/>
                    <Card name="neo search engine" prevImg={nasa_ico} git="https://github.com/fxGRDN/neo-se" link="https://neo-se.herokuapp.com/"/>
                    
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <h2 style={{color: 'white'}}>Więcej projektów wkrótce! <span style={{fontSize:'0.5rem'}}>(oby)</span> </h2>
                </div>
            </div>
        )
    }
}






const Card = (props: TCard) => {
    return (
        <div className="card">
            <img src={props.prevImg} alt="projekt" />
            <div className="card-desc">
                <h3>
                    {props.name}
                </h3>
                <div className="card-links__">
                <div className="card-links">
                        <a href={props.docker} target="blank">
                            <div className="of-course-svg-cant-center-itself"><FontAwesomeIcon icon={faDocker} color={props.docker !== undefined ? 'white' : 'red'}/></div>
                        </a>
                        <a href={props.git} target="blank">
                            <div className="of-course-svg-cant-center-itself"><FontAwesomeIcon icon={faGithub} color={props.git !== undefined ? 'white' : 'red'}/></div>
                        </a>
                        <a href={props.link} target="blank">
                            <div className="of-course-svg-cant-center-itself"><FontAwesomeIcon icon={faLink}   color={props.link !== undefined ? 'white' : 'red'}/></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio