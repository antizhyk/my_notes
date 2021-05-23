import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Home from "./component/Home";

function App() {
    return (
        <BrowserRouter>
          <h1>Start Project</h1>
            <Route exact path='/' component={Home}/>
        </BrowserRouter>
    );
}

export default App;
