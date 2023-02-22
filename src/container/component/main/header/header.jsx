import styles from "./styles.css"
import { useState } from "react"
import { faBars, faMagnifyingGlass, faAngleDown} from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Header = () => {
    
  
    return (
        <div className="wrapper">
            
            <div className="container">
                <button className="menuBtn">
                    <FontAwesomeIcon className="barIcon" icon={faBars} />
                </button>

                <div className="searchInput">
                    <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass}/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="action">
                <FontAwesomeIcon className="bellIcon" icon={faBell} />
                <div className="division">|</div>
                <div className="imgWrapper">
                    <img src="" alt="" />
                </div>
                <p>Name</p>
                <FontAwesomeIcon className="downIcon" icon={faAngleDown} />
        </div>

        </div>
    )
}