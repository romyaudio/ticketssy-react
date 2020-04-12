import React from 'react'
import FormLogin from '../components/form-Login'
import Loading from '../components/Loading'
import FatalError from '../components/Error500'
import url from '../config/url'

class Login extends React.Component {
    state = {
        form: {
            email: '',
            password: ""
        },
        errors: [],
        loading: false,
        errF: [],
        buss: false,
        json:[]
    }
    hendleChange = e => {
        this.setState({
            form: { ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    hendleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/login`, config)
            let json = await res.json()
            if (res.status === 222) {
                this.setState({
                    buss: true,
                    loading: false
                })
                 localStorage.setItem('token', json.token)
                 localStorage.setItem('iduser', json.iduser)
                 this.props.history.push('create/business')
            } else if (res.status === 201) {
                this.setState({
                    loading: false,
                    buss: false,
                    errors: []
                })
                localStorage.setItem('token', json.token)
                localStorage.setItem('business', json.user.business)
                localStorage.setItem('iduser',json.user.id)
                this.props.history.push('dashboard')

            } else if (res.status === 422) {
                this.setState({
                    loading: false,
                    errors: json.errors,
                    buss: false
                })
                localStorage.clear()
            } else {
                this.setState({
                    error: true,
                    loading: false,
                })
            }
        } catch (error) {}
        //
    }

    render() {
        const {
            form,
            loading,
            errors,
            error
        } = this.state
        if (error) {
            return <FatalError / >
        }
        if (loading) {
            return <Loading / >
        }
        return ( < FormLogin form = {
                form
            }
            onChange = {
                this.hendleChange
            }
            onSubmit = {
                this.hendleSubmit
            }
            erro = {
                errors
            }
            />)
    }
}
export default Login