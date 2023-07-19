import logo from "../../img/beer.png";
import Card from "../../components/Card";
import {Outlet} from "react-router-dom";
import './Root.css'
import {useBeerStore} from "../../store";

function Root(props) {


    const selectedBeers = useBeerStore(state => state.selectedBeers)
    const deleteBeer = useBeerStore(state => state.deleteBeer)

    //
    // let pagesCount = Math.ceil (props.totalBeers / props.pageSize);
    //
    // let pages = [];
    // for (let i=1; i<=pagesCount; i++) {
    //     pages.push(i);
    // }


    return (
        <div className="app">
            <header className="app-header">
                <h1 className="header-title">Beer List</h1>
                <img src={logo} className="header-logo" alt="logo" width={100} height={90} />
            </header>
            {selectedBeers.length > 0 ?
                <div className='delete'>
                    <button onClick={() => deleteBeer()} className='dlt-btn'>Delete X</button>
                    <h3 className='selected-beers'>Selected beers: {selectedBeers.length}</h3>
                </div>
                :
                <></>}
            {/*<div className="app-pagination">*/}
            {/*    { pages.map(p => {*/}
            {/*        return (*/}
            {/*                <span className={props.currentPage === p ? "current" : ""}>*/}
            {/*                 {p}*/}
            {/*                </span>*/}
            {/*            )*/}
            {/*    })}*/}

            {/*</div>*/}
            <div className="app-content">
                {props.beers.map((obj) => {
                    return (
                        <Card id={obj.id} key={obj.id} name={obj.name} image={obj.image_url} tagline={obj.tagline} description={obj.description}/>
                    )
                })}
            </div>
            <div className="outlet_routes">
                <Outlet />
            </div>
        </div>
    )

}

export default Root;


