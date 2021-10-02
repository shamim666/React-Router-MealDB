import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Nontfound from './components/Notfound/Nontfound';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className="App">

<Router>
  <Header></Header>
  <Switch>
    <Route exact path = "/">
      <Home></Home>
    </Route>
  
    <Route path = "/home">
      <Home></Home>
    </Route>

    <Route path = "/menu">
      <Menu></Menu>
    </Route>

    <Route path = "/meal/:meal_ID">
      <MealDetails></MealDetails>
    </Route>
    <Route path ="/about">
      <About></About>
    </Route>

    <Route path = "*">
      <Nontfound></Nontfound>
    </Route>
  </Switch>
</Router>

    </div>
  );
}

export default App;
