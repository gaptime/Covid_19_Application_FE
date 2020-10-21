import React,{ Component, Fragment } from 'react';
import './App.css';
import SignIn from './Components/signIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Components/register';
import Reset from './Components/reset';
class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
      <Route exact path="/" component={SignIn}/>
      <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/reset" component={Reset}/>
      </Switch>
      </Fragment>
      </Router>

    )
  }
}
export default App;
