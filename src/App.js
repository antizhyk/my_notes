import './App.css';
import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Home from "./component/Home";
import firebase from "./firebase";

function App() {
    React.useEffect(() => {
        const msg = firebase.messaging()
        msg.requestPermission().then(() => {
            return msg.getToken();
        }).then(data => {
            console.warn('token', data)
        })
    })
    return (
        <BrowserRouter>
            <h1>Start Project</h1>
            <Route exact path='/' component={Home}/>
        </BrowserRouter>
    );
}

export default App;
