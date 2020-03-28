import React from 'react';
import Gallery from './Gallery/Gallery';
import Detail from './Details/Details';
import NotFound from './NotFound/NotFound';
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom"; 
import './App.css';


function App() {
  return (
  	<Router> 
    <div className="App"> 
    	<Switch>
       <Route exact path="/" component={Gallery} /> 
       <Route exact path="/not-found" component={NotFound} /> 
       <Route exact path="/:details" component={Detail} /> 
       </Switch>
    </div>
    </Router> 
  );
}

export default App;
