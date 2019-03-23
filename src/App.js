import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";

let Tables = () => <div>Tables</div>;
let Charts = () => <div>Charts</div>;
let Things = () => <div>Things</div>;

function App() {
  return (
    <Router>
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          <Route exact path="/" component={Dashboard} />
          <Route path="/charts" component={Charts} />
          <Route path="/tables" component={Tables} />
          <Route path="/t" component={Things} />
        </div>
      </div>
    </div>
    </Router>
  );
}


export default App;
