import {useState} from 'react'
import './responsiveNavbar.css'
import { GrMenu } from 'react-icons/gr';
import {Link} from 'react-router-dom'
import RoutingPath from '../../routing/RoutingPath';

const ResponsiveNavbar = () => {
        const [toggleMenu, setToggleMenu] = useState(false)

const toggleMenuFunc = () => {
    setToggleMenu(!toggleMenu)
}



  return (
    <div className={toggleMenu ? 'responsive-menu show': 'responsive-menu'}>
        <GrMenu className='menu-icon' onClick={() => toggleMenuFunc()}/>

        <ul className="responsive-ul">
        <Link className='responsive-list-item' to={RoutingPath.infoView} onClick={() =>toggleMenuFunc()}><li> InfoMissManga</li></Link>
        <Link className='responsive-list-item' to={RoutingPath.contactView} onClick={() =>toggleMenuFunc()}><li> Contact</li></Link>
        <Link className='responsive-list-item' to={RoutingPath.aboutView} onClick={() =>toggleMenuFunc()}><li >About us</li></Link>
        <Link className='responsive-list-item' to={RoutingPath.mainView} onClick={() =>toggleMenuFunc()}><li>My page</li></Link>
        <Link className='responsive-list-item' to={RoutingPath.loginView} onClick={() =>toggleMenuFunc()}><li >Log In</li></Link>
          
        </ul>

    </div>
  )
}

export default ResponsiveNavbar