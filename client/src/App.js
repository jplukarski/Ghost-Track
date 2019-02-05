import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index"
import News from "./pages/News/index"
import Reviews from "./pages/Reviews/index"
import Features from "./pages/Features/index"
import Form from "./pages/Form/index"




const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/news" component={News} />
      <Route exact path="/reviews" component={Reviews} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/form" component={Form} />
    </Switch>
  </Router>
)

export default App;
