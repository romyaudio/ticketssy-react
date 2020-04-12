import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import newAccount from '../pages/newAccount'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ResetPassword from '../pages/Reset-Password'
import newBuss from '../pages/newBuss'
import Team from '../pages/Team'
import Test from '../pages/Test'

function App() {
    return ( 
        <BrowserRouter>
         <Switch> 
          <Route exact path = "/" component = { Home }/>
          <Route exact path = "/create" component = { newAccount }/>
          <Route exact path = "/login" component = { Login }/>
          <Route exact path = "/create/business" component = { newBuss }/> 
          <Route exact path = "/reset/password" component = { ResetPassword }/> 
          <Route exact path = "/dashboard" component = { Dashboard }/> 
          <Route exact path = "/team" component = { Team }/>
          <Route exact path = "/test" component = { Test }/> 
        </Switch>
       </BrowserRouter>)
}
export default App