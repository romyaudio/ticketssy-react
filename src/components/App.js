import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import	Home from '../pages/Home'
import newAccount from '../pages/newAccount'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ResetPassword from '../pages/Reset-Password'

function App(){
	return(
        <BrowserRouter>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/create" component={newAccount}/>
             <Route exact path="/login" component={Login}/>
             <Route exact path="/dashboard" component={Dashboard}/>
             <Route exact path="/reset/password" component={ResetPassword}/>
           </Switch>
        </BrowserRouter>
		)

	}
export default App
