import React from 'react'
import FormAccount from '../components/form-NewAccount'

const newAccount = ({form,onChange,onSubmit}) => (

	<div className="row">

                <div className="col-sm">

                    <FormAccount
                       onChange={onChange}
                       onSubmit={onSubmit}
                       form={form}
                    />
                </div>
            </div>
)	
export default newAccount