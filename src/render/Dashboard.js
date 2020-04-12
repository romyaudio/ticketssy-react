import React from 'react'
import FormAccount from '../components/form-NewAccount'


const newAccount = ({form,onChange,onSubmit,errors}) => (

	<div className="row">

                <div className="container">

                    <FormAccount
                       onChange={onChange}
                       onSubmit={onSubmit}
                       form={form}
                       errors={errors}
                    />
                </div>
            </div>
)
export default newAccount