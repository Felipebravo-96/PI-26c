import { Link } from "react-router-dom";
import {caja, items} from  './Navbar.module.css'


function Navbar(){
    return(
        <div className={caja}>
            <nav>
                <ul>
                    <li>
                        <Link  to={'/countries'} className={items}>
                            <h2 >Countries</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/newActivity'} className={items}>
                            <h2 >Activity</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Activity'} className={items}>
                            <h2 >Activity List</h2>
                        </Link>
                    </li>
                </ul>
            
            </nav>    
        </div>
    )
}

export default Navbar;