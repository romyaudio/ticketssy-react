import React from 'react'
import ModalErrors from './modalErrors'

function ModalError (props){
      return(
       <>
       {
             props.errors.map((err) => {
             	return(
                   <ModalErrors
                      error={err.error}
                   />
             		)
             	
             })
         
        }

        </>
         )		
         	
         



      


	}
export default ModalError	