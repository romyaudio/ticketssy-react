import React from 'react'
import '../styles/teamNav.css'

const Nav = ({handleShow}) =>{
  
    return(
     <>
      <div className="container">
            <div onClick={handleShow} className="d-sm-inline-flex m-3 p-1 border border-info card">
              <p className="text-center lead m-1 text-info"><i className="fas fa-barcode"></i></p>
              <p className="text-center lead m-1">Create Item</p>
            </div>
       </div>
     </>
    
)
	}
export default Nav