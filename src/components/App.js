import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import	Home from '../pages/Home'
import newAccount from '../pages/newAccount'

function App(){
	return(
        <BrowserRouter>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/create" component={newAccount}/>
           </Switch>
        </BrowserRouter>
		)
	
	}
export default App
