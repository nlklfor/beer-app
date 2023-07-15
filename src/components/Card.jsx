import "./Card.css";
import {Link} from "react-router-dom";
function Card (props) {
    // document.querySelector('.beer-list').oncontextmenu= () => {
    //     console.log(!props.selected)
    //     return false;
    // }
    return (
        <>
            <Link to='/beer-page'>
                <div className="beer-list" onClick={props.onSelect}>
                    <h2 className="beer-name">{props.name}</h2>
                    <img alt="beer" className="beer-img" src={props.image} width={50} height={150}></img>
                    <p className="beer-tag">{props.tagline}</p>
                </div>
            </Link>
        </>

)}


export default  Card;