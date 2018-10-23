import React, {
    Component
} from 'react';
import './App.css';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            hello world <
            Button type = "primary" >
            cat <
            /Button> < /
            div >
        );
    }
}

export default App;