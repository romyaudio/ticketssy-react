import React from 'react'
import './styles/form-reset-password.css'
import logo from '../img/ticketssy-icon.png'
import {
    Link
} from 'react-router-dom'

const ResetPassword = ({
    form
    , onChange
    , onSubmit
    , errors
}) => ( <
    >
    <div className="container">
    <div className="row  justify-content-center">
    <div className="col-md-5 border py-4">
    <div className="tfrp">
    <div className="frpme">{errors.email}</div>
    <div className="logofrp">
    <img src={logo} alt="logo"/>
    </div>
    <h3>Reset Password</h3>
    <p>Enter the email address you used to register with Ticketssy and we'll send you instructions to reset your password.</p>
    </div>
  <form onSubmit={onSubmit}>
  <div className="form-row">
    <div className="col-md-8">
      <input name="email" onChange={onChange} value={form.email} type="email" className="form-control" placeholder="Email address"/>
    </div>
    <div className="col">
      <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
    </div>
  </div>
  <div className="text-center p-3">
      <Link to="/login">Back to login</Link>
  </div>
</form>
   </div>
   </div>



  </div> <
    />
)
export default ResetPassword
