
import {Link} from 'react-router-dom'
import RoutingPath from "../../routing/RoutingPath";
import css from './Navbar.module.css'


export default function NavBar() {


    return (
        <nav className="pv4 ph3 ph5-ns tc">
            <ul className={css.navList}>
                <li className={css.navItem}>
                    <Link to={RoutingPath.infoView}>InfoMissManga</Link>
                </li>
                <li className={css.navItem} >
                    <Link  to={RoutingPath.contactView}>Contact</Link>
                </li>
                <li className={css.navItem}>
                    <Link  to={RoutingPath.aboutView}>About us</Link>
                </li>

              {/*ternary*/}
                    <li className={css.navItem}>
                        <Link  to={RoutingPath.mainView}>My page</Link></li>

                    <li className={css.navItem}>
                        <Link to={RoutingPath.loginView}>Log In</Link></li>
            </ul>
        </nav>
    )
}