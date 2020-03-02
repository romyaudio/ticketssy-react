import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import	Dashboard from '../pages/Dashboard'
import	Home from '../pages/Home'
import newAccount from '../pages/newAccount'

function App(){
	return(
        <BrowserRouter>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/create" component={newAccount}/>

             //<Route exact path="/" component={Dashboard}/>
           </Switch>
        </BrowserRouter>
		)
	
	}
export default App
