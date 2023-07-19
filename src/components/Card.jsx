import "./Card.css";
import {Link} from "react-router-dom";
import {useBeerStore} from "../store";
function Card (props) {
    const addBeer = useBeerStore(state => state.addBeer)
    const setCurrentCard = useBeerStore(state => state.setCurrentCard)
    // document.querySelector('.beer-list').oncontextmenu= () => {
    //     console.log(!props.selected)
    //     return false;
    // }
    const addBtn = (event) => {
        addBeer(props.id)
        event.preventDefault()
    }
    const addCurrentCard = () => {
        setCurrentCard(props)
    }

    return (
        <>
            <Link to='/beer-page'>
                <div onClick={addCurrentCard} className={useBeerStore.getState().selectedBeers.includes(props.id) ? 'beer-list-selected' : 'beer-list'} onContextMenu={addBtn}>
                    <h2 className="beer-name">{props.name}</h2>
                    <img alt="beer" className="beer-img" src={props.image} width={50} height={150}></img>
                    <p className="beer-tag">{props.tagline}</p>
                </div>
            </Link>
        </>

)}


export default  Card;