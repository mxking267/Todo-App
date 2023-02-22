import styles from "./styles.css"
import { faJedi,faGear,faHouse,faRightFromBracket,faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Sidebar = () => 
{
    return (
        <div className="sidebar">
               <FontAwesomeIcon className="Logo" icon={faJedi} />
               <div className="sidebarActionWrapper">
               <FontAwesomeIcon className="sidebarAction" icon={faHouse} />
               <FontAwesomeIcon className="sidebarAction" icon={faUser} />
               <FontAwesomeIcon className="sidebarAction" icon={faEnvelope} />
               <FontAwesomeIcon className="sidebarAction" icon={faGear} />
               </div>
               <FontAwesomeIcon className="sidebarAction" icon={faRightFromBracket} />

        </div>
    )
}