import logo from "../../img/beer.png";
import Card from "../../components/Card";
import {Outlet} from "react-router-dom";
import './Root.css'

function Root(props) {

    return (
        <div className="app">
            <header className="app-header">
                <h1 className="header-title">Beer List</h1>
                <img src={logo} className="header-logo" alt="logo" width={100} height={90} />
            </header>
            <div className="app-content">
                {props.beers.map((obj) => {
                    return (
                        <Card selected={props.isSelected} onSelect={props.onSelectBtn} key={obj.id} name={obj.name} image={obj.image_url} tagline={obj.tagline} description={obj.description}/>
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


