import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoutingPath from "./RoutingPath";

import LoginPage from '../components/loginPage/LoginPage';
import Main from '../views/main/Main';
import AboutView from '../views/about/AboutView';
import ContactView from '../views/contact/ContactView';
import InfoView from '../views/infoMissManga/InfoView';


const Routing = (props) => {
    return (
        <>
            {props.children}
            <Routes>
                <Route path={RoutingPath.infoView} element={<InfoView/>}/>
                <Route path={RoutingPath.contactView} element={<ContactView/>}/>
                <Route path={RoutingPath.aboutView} element={<AboutView/>}/>
                <Route path={RoutingPath.mainView} element={<Main/>}/>
                <Route path={RoutingPath.loginView} element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default Routing