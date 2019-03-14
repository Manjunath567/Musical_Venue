import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
//import Register from './Component/Register/Register';
//import Forgot from './Component/Forgot/Forgot';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
    </Switch>
)

export default Routes;
