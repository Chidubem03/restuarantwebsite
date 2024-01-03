import Menu from './Menu';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
  return (
   
    <div className="App"> 
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
    
  );
}

export default App;
