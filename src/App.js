import React, { Component } from 'react'
import './App.css'
import FacebookLogin from 'react-facebook-login'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'


class App extends Component {
    constructor() {
        super()

        extendObservable(this, {
            user: null
        })
        // this.state = {user: null}
    }
    responseFacebook = response => {
        debugger
        // this.setState({ user: response })
        this.user = response
    };
    render() {
        return (
        <div className = "App">
        { this.user !== null ? `Hello, ${this.user.name}`:
            <FacebookLogin
                appId = "762214630794479"
                autoLoad = { false }
                fields = "name,email,picture"
                scope = "public_profile"
                callback = { this.responseFacebook }
            />
        }
        </div>
        )
    }
}

export default observer(App)