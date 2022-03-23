import "./App.css";
import Nav from "./Nav";
import Home from "./Home";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feedback from "./Feedback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home"><Home/></Route>'
        
        <Route path="/Feedback"><Feedback/></Route>
        <Route path="/Contact">Contact Details</Route>
        <Route path="/">
          <Nav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
