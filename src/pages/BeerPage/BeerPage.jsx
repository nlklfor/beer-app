import {useBeerStore} from "../../store";


function BeerPage(props) {
    const items = useBeerStore(state => state.currentCard)
    return(
        <div className='beer-page'>
            <div className='beer-img'>
                <img alt='beer-review' className='beer-review' src={items.image}/>
            </div>
            <div className='beer-description'>
                <h2 className='beer-name'>{items.name}</h2>
                <p>{items.description}</p>
                <p>{items.tagline}</p>
                <p>{items.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerPage;
