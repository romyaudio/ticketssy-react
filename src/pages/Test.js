import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import url from '../config/url'
axios.defaults.withCredentials = true;
const Test = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data =>{
		console.log(data)
		axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {

        axios.post('http://localhost:8000/login',data).then(res =>{
			console.log(res)
		})
    });
		
	}
	return(
	<form onSubmit={handleSubmit(onSubmit)}>
	 <input ref={register} name="email" type="text" value="romyaudio@hotmail.com"/><br/>
	 <input ref={register} name="password" type="password" value="malone32"/><br/>
	 <button type="submit" className="btn btn-primary">Submit</button>
	</form>
)
}
export default Test
