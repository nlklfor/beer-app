import "./Card.css";
import {Link} from "react-router-dom";
import {useBeerStore} from "../store";
import {useState} from "react";
function Card (props) {
    const [isSelected, setIsSelected] = useState(false);
    const addBeer = useBeerStore(state => state.addBeer)
    const selectedBeers = useBeerStore(state => state.selectedBeers)
    // document.querySelector('.beer-list').oncontextmenu= () => {
    //     console.log(!props.selected)
    //     return false;
    // }
    const addBtn = () => {
        addBeer({name : props.name, id: props.key, description: props.description})
        setIsSelected(!isSelected)
        console.log(selectedBeers);
    }
    return (
        <>

                <div className={isSelected ? 'beer-list-selected' : 'beer-list'} onClick={addBtn}>
                    <h2 className="beer-name">{props.name}</h2>
                    <img alt="beer" className="beer-img" src={props.image} width={50} height={150}></img>
                    <p className="beer-tag">{props.tagline}</p>
                </div>

        </>

)}


export default  Card;