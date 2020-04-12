import React from 'react'
import logo from '../img/ticketssy-icon.png'
import './styles/form-Buss.css'

const formBuss = ( { form, onChange, onSubmit, errors, states } ) => ( <
    >
    <div className="container-fluid p-1 bg-dark">
      <div className="fbl">
        <img src={logo} alt="logo"/>
      </div>
    </div>
    <div className = "container p-3 text-center">
     <h3>Create New Profile Business</h3>
    </div>
    <div className="container border p-3">
       <form onSubmit={onSubmit}>
       <input type="hidden" name="iduser" value={form.iduser}/>
  <div className="form-row ">
  <div className="form-group col-md-12">
    <label> * Business name.</label>
      <input type="text"
      className="form-control"
      name="name"
      onChange={onChange}
      value={form.name}
      placeholder="business name."
      />
    <small>{errors.name}</small>
  </div>

    <div className="form-group col-md-6">
      <label> * Email.</label>
      <input type="email"
      className="form-control"
      placeholder="Email Address."
      name="email"
      value={form.email}
      onChange={onChange}
      />
     <small>{errors.email}</small>
    </div>

    <div className="form-group col-md-6">
      <label>* Phone number.</label>
      <input type="tel"
      className="form-control"
      placeholder="999-999-9999"
      name="phone"
      value={form.phone}
      onChange={onChange}
      />
      <small>{errors.phone}</small>
    </div>

  </div>
  <div className="form-group">
    <label>Address</label>
    <input type="text"
    className="form-control"
    placeholder="1234 Main St"
    name="address"
    value={form.address}
    onChange={onChange}/>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label>City</label>
      <input type="text"
      className="form-control"
      name="city"
      onChange={onChange}
      value={form.city}/>
    </div>

    <div className="form-group col-md-4">
      <label>State</label>
      <select className="form-control"
      name="state"
      onChange={onChange}
      value={form.state}>
        <option>Choose...</option>
        {states.map((state)=>
           <option value={state.name} key={state.id}>{state.name}</option>
           )}
      </select>
    </div>

    <div className="form-group col-md-2">
      <label>Zipcode</label>
      <input type="text"
       className="form-control"
       name="zip"
       onChange={onChange}
       value={form.zip}/>
    </div>

    <div className="form-group col-md-12">
    <label>Website</label>
    <input type="text"
    className="form-control"
    placeholder="https://www.yourwebsite.com"
    name="website"
    value={form.website}
    onChange={onChange}/>
  </div>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
 </>
)
export default formBuss