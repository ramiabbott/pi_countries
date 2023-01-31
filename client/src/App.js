import './App.css';
import Home from './views/Home/HomePage'
import LandingPage from './views/LandingPage/LandingPage'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DetailPage from './views/Detail/DetailPage';
import FormPage from './views/Form/FormPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/detail/:id' component={DetailPage} />
        <Route path='/home' component={Home}/>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/activities/create' component={FormPage} />
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
