import React, {Component} from 'react';

import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";

import {BrowserRouter, Route} from "react-router-dom";
import Builds from "./components/Builds";
import Kills from "./components/Kills";

class App extends Component {



    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
