import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
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
