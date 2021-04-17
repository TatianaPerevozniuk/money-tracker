import React,{Component} from 'react';
import logo from "../logo(1).png";

class NavBar extends Component {
    render() {
        return (
            <nav className="d-flex navBarInner">
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                    <span className='nameLogo'> MoneyTracker </span>
                </div>
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                            aria-selected="true">Home
                    </button>
                    <button className="nav-link" id="v-pills-сharts-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-сharts" type="button" role="tab"
                            aria-controls="v-pills-сharts" aria-selected="false">Charts
                    </button>
                    <button className="nav-link" id="v-pills-сategories-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-сategories" type="button" role="tab"
                            aria-controls="v-pills-сategories" aria-selected="false">Categories
                    </button>
                </div>
            </nav>
        )
    }
}

export default NavBar;