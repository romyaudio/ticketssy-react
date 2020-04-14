import React from 'react'
import NewAccount from '../homeComponents/form-NewAccount'
import Loading from '../components/Loading'
import ConfirEmail from '../components/Confir-Email'
import FatalError from '../components/Error500'
import url from '../config/url'

class newAccountContaine extends React.Component {
    state = {
        form: {
            name: ''
            , email: ''
            , password: ''
            , password_confirmation: ''
        }
        , error: null
        , isLoaded: false
        , response: null
        , json: []
    }
    handleChange = e => {
        this.setState({
            form: { ...this.state.form
                , [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = async e => {
        this.setState({
            isLoaded: true
        })
        e.preventDefault()
        try {
            let config = {
                method: 'POST'
                , headers: {
                    'Accept': 'application/json'
                    , 'Content-Type': 'application/json'
                }
                , body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/create`, config)
            let json = await res.json()
            if (res.status === 422) {
                this.setState({
                    json: json.errors
                    , isLoaded: false
                })
            } else if (res.status === 201) {
                this.setState({
                    json: []
                    , isLoaded: false
                    , successfully: 'Account Create Successfully!'
                })
            } else {
                this.setState({
                    isLoaded: false
                    , error: true
                })
            }
        } catch (error) {
            this.setState({
                error
            , });
        }
    }
    render() {
        const {
            error
            , isLoaded
            , form
            , successfully
        } = this.state
        if (error) {
            return <FatalError / >
        }
        if (isLoaded) {
            return <Loading / >
        }
        if (successfully) {
            return <ConfirEmail
            form = {
                form
            }
            />
        }
        return ( < div > < NewAccount form = {
                this.state.form
            }
            onChange = {
                this.handleChange
            }
            onSubmit = {
                this.handleSubmit
            }
            errors = {
                this.state.json
            }
            /> < /div > )
    }
}
export default newAccountContaine
