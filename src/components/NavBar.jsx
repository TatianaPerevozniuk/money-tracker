import React,{Component} from 'react';
import {  Link } from "react-router-dom";
import logo from "../logo(1).png";

const links = [
    {
      to: '/money-tracker/',
      label: 'Home'
    },
    {
      to: '/money-tracker/charts',
      label: 'Charts'
    },
    {
      to: '/money-tracker/categories',
      label: 'Categories'
    }
  ];
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
                    {links.map(link => (
                        <button  key={link.to} className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                        aria-selected="false">
                            <Link to={link.to}>{link.label}</Link>
                        </button>
                    ))}
                </div>
            </nav>
        )
    }
}

export default NavBar;