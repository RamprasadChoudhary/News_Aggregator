import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'

function Header(){
    const [active,setActive] = useState(false) ;
    const [showCountryDropdown,setShowCountryDropdown] = useState(false)
    const [showCategoryDropdown,setShowCategoryDropdown] = useState(false);
    const categories = ["business","entertainment","general","science","sports","politics"]

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-arounder">
                <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 md-5">\
                <span className="logo">
                    <img src="" alt="News_aggregator" />
                </span>
                </h3>
                <ul className={`nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end ${active ? 'active':''}`}>
                    <li>
                    <Link className="no-underline font-semibold" to="/" onClick={() => setActive(!active)}>
                    All News
                    </Link>   
                     </li>
                    <li className="dropdown-li"> 
                        <Link className="no-underline font-semibold flex-center gap-2" onClick={()=>{setShowCategoryDropdown(!showCategoryDropdown);setShowCountryDropdown(false)}}>
                        Top-Headlines
                        </Link>
                    </li>

                    <ul className={setShowCategoryDropdown ? "dropdown p-2 show-dropdown" : " dropdown p-2"} >
                        <li></li>
                    </ul>

                    <li >
                        <Link className="no-underline font-semibold" to="#" onClick={toggleTheme}>
                        <input type="checkbox" className="checkbox" id="checkbox"/>
                                <label for="checkbox" class="checkbox-label">
                                <i class="fas fa-moon"></i>
                                <i class="fas fa-sun"></i>
                                <span class="ball"></span>
                                </label>
                        </Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}