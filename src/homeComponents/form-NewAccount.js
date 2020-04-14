import React from 'react'
import '../styles/form-NewAccount.css'
import {Link} from 'react-router-dom'
import logo from '../img/ticketssy-icon.png'

const formNewAccount = ({ onChange, onSubmit, form, errors }) => (

 <>
   <div className="container-fluid chf">
     <Link to ="/">
       <img src ={ logo }alt="logo"/>
     </Link>
   </div>
   <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-sm col-md-7 col-xl-6">
         <h2> Let’ s create your account. </h2>
         <p> Create your ticketssy account without contracts or cancellation fee.We make it easy
             for you.Test
             if you like it you stay with us.
         </p>

          <form onSubmit={onSubmit}>
            <div className="form-group">
               <label> Full name </label> 
               <input
                 type = "text"
                 className = "form-control"
                 name = "name"
                 aria-describedby="emailHelp"
                 onChange={onChange}
                 value={form.name}
               /> 
               <small> {errors.name} </small>
           </div> 

           <div className="form-group">
            <label> Email address </label>
            <input type="email"
                className = "form-control"
                name = "email"
                aria-describedby="emailHelp"
                onChange = {onChange}
                value = {form.email}
            />
            <small> {errors.email} </small>
            <small className = "form-text text-muted"> We 'll never share your email with anyone else.
            </small>

           </div>

           <div className="form-group">
            <label>Password</label> 
            <input type="password"
                className="form-control"
                name="password"
                onChange={onChange}
                value={form.password}
            /> 
            <small> {errors.password} </small> 
           </div>

           <div className="form-group">
            <label> Confirm - Password </label> 
            <input type = "password"
                className="form-control"
                name="password_confirmation"
                onChange={onChange}
                value={form.password_confirmation}
            /> 
           </div>
            <button type="submit"
               className="btn btn-primary"> Submit </button>
           <div>
            Already have a Ticketssy account ? 
            <Link to="login">Login</Link> 
           </div> 
        </form>
     </div>
    </div>
  </div> 
</> )
export default formNewAccount
