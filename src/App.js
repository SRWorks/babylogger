import React, {
    Component
} from 'react';
import {
    Button
} from 'antd'
import './App.css';
import FacebookLogin from 'react-facebook-login';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
    responseFacebook = (response) => {
        this.setState({
            user: response
        })
    }
    render() {
        return ( <
            div className = "App" > {
                this.state.user !== null ? `Hello, ${this.state.user.name}` : <
                    FacebookLogin appId = "762214630794479"
                autoLoad = {
                    false
                }
                fields = "name,email,picture"
                scope = "public_profile"
                callback = {
                    this.responseFacebook
                }
                />} < /
                div >
            );
        }
    }

    export default App;