import {fondo} from './App.css';
import {Route, Switch, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Searchbar from './components/Searchbar/Searchbar';
import Order from './components/Order/Order';
import CountryDetail from './components/countryDetail/CountryDetail';
import AddActivity from './components/addActivity/addActivity';
import Landing from './components/Landing/Landing';
import Navbar from './components/NavBar/Navbar';
import Filter from './components/Filter/Filter';
import Activities from './components/Activities/Activities';
function App() {
  return (
    <div className="fondo">
      <Switch>
      <Route exact path={'/Activity'}>
          <Navbar/>
          <Activities/>
      </Route>
      <Route exact path={'/countries'}>
          <Navbar/>
          <Searchbar/>
          <Order/>
          <Filter/>
          <Home/>
        </Route>
        <Route exact path={'/newActivity'}>
          <Navbar/>
          <AddActivity/>
        </Route>
        <Route exact path={'/countries/:id'}>
          <Navbar/>
          <CountryDetail/>
        </Route>
        <Route exact path={'/'}>
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}
//<h1>Henry Countries</h1>
export default App;
