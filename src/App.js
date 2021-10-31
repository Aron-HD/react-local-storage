import { React } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Scoreboard from "./components/Scoreboard";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Match</h1>
        <nav className="navbar">
          <Link to="/">Scoreboard</Link>
          <Link to="/dashboard">Control Panel</Link>
        </nav>
      </header>
      <main>
        <div className="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Scoreboard} />
            {/* <Route path="/*" component={NotFound} /> */}
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
