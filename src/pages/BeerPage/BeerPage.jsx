import {useBeerStore} from "../../store";
import './BeerPage.css'

function BeerPage(props) {
    const items = useBeerStore(state => state.currentCard)
    return(
        <div className='beer-page'>
            <div className='beer-img'>
                <img alt='beer-review' className='beer-review' src={items.image} width={100} height={250}/>
            </div>
            <div className='beer-description'>
                <h2 className='beer-name'>{items.name}</h2>
                <p className='beer-description'>{items.description}</p>
                <p className='beer-tag'>{items.tagline}</p>
                <p className='beer-description'>{items.contributed}</p>
            </div>
        </div>
    )
}

export default BeerPage;
