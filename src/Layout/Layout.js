import React from "react";
import './Layout.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "../Views/Home/Home";
import {Profile} from "../Views/Profile/Profile";
import {GameDetails} from "../Views/GameDetails/GameDetails";
import {Footer} from "../Components/Footer/Footer";
import {Navbar} from "../Components/Navbar/Navbar";
import injectContext from "../Store/appContext";

export const Layout = () => {

    return (
        <div className="Layout">
            <div id="bg"></div>
            <BrowserRouter>
                <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/game_details" component={GameDetails}/>
                        <Route render={() => <h1>Not found!</h1>}/>
                    </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
