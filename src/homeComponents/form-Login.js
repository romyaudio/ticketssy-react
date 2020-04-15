import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import '../styles/form-login.css'
import logo from '../img/ticketssy-icon.png'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Error500 from '../components/Error500'
axios.defaults.withCredentials = true;


const FormLogin = () => {

    let history = useHistory()
	const { register, handleSubmit, errors } = useForm();
	const [reserror , setReserror] = useState([])
	const [isLodading , setIsloading] = useState(false)
	const [error500 ,setError500] = useState(false)

	const onSubmit = data =>{
		setIsloading(true)
		axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {

        axios.post('http://localhost:8000/login',data).then(res =>{

        		setIsloading(false)
        		localStorage.setItem('business',res.data.business)
        		localStorage.setItem('iduser',res.data.id)
        		return history.push('dashboard')
		})

		.catch(error =>{
			if (error.response.status === 422) {
				setReserror(error.response.data.errors);
				setIsloading(false)
			}else{
				setError500(true);
			}
			
		})
    });
	}

	if (error500) {
		return <Error500/>
	}
	return(
	<>
   <div className="container-fluid">
	<div className="row align-items-center justify-content-center vh-100 p-3 ">
	  <div className="col-xl-3 col-lg-5 col-md-6 border border-info p-3 rounded">
	  	<div className="">  
           {reserror.email && <span className="errors">{reserror.email}</span>
           || reserror.password  && <span className="errors">{reserror.password}</span> 
           || reserror }
	    </div>

	    <form  onSubmit={handleSubmit(onSubmit)}>
	          <span>{isLodading ? <Loading/> : <span></span>}</span>
	          <div className="logofl">
	            <img src={logo} alt="logo"/>
	          </div>

		      <div className="form-group">
			    <label>Email address</label>
			    <input type="email"
			      className="form-control"
			      ref={register({ required: true })}
			      name="email"
			      />
			     {errors.email && <span className="errors">This field is required</span>}
		      </div>

	          <div className="form-group">
	            <label>Password</label>
	            <input type="password"
	              className="form-control"
				  name="password"
				  ref={register({ required: true })}
				  />
	            {errors.password && <span className="errors">This field is required</span>}
	          </div>

	           <button type="submit" className="btn btn-primary">Submit</button>

	         <div className="p-1">
	           <Link to="reset/password">Forgot your Password</Link>
	           <p>Don’t have a Square account? <Link to="create">Sign up</Link></p>
	         </div>
	       </form>
	  </div>
	</div>
   </div>
   </>
   )
}
export default FormLogin
