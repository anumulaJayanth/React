import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cyberdyne from "./pages/Cyberdyne";
import treatments from "./pages/treatments";
import Tymo from "./pages/Tymo";
import Plabo from "./pages/Plabo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/treatment/Subtreatments" exact component={treatments} />
          <Route path="/treatment/Cyberdyne" exact component={Cyberdyne} />
          <Route path="/treatment/Tymo" exact component={Tymo} />
          <Route path="/treatment/Plabo" exact component={Plabo} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
