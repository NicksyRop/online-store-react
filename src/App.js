import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
