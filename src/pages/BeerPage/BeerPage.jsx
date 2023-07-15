function BeerPage(props) {
    return(
        <div className='beer-page'>
            <div className='beer-img'>
                <img alt='beer-review' className='beer-review' src={props.beers.image_url}/>
            </div>
            <div className='beer-description'>
                <h2 className='beer-name'>{props.beers.name}</h2>
                <p>{props.beers.description}</p>
                <p>{props.beers.tagline}</p>
                <p>{props.beers.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerPage;
