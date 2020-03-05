import React from 'react'
import FormAccount from '../components/form-NewAccount'
import ModalError from '../components/modalErrors'

const newAccount = ({form,onChange,onSubmit,empty}) => (

	<div className="row">
                <div className="container">
                  <ModalError
                  empty={empty}

                 />
                  
                </div>
                <div className="container">

                    <FormAccount
                       onChange={onChange}
                       onSubmit={onSubmit}
                       form={form}
                    />
                </div>
            </div>
)	
export default newAccount