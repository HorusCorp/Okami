import React, {useEffect} from 'react';
import './App.css';
import Page404 from './COMPONENTS/Page404'
import ReactGa from 'react-ga'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Helmet } from 'react-helmet';




import Mentionslegales from './COMPONENTS/Mentionslegales'
import Home from './COMPONENTS/Home';


function App() {

  useEffect(() => {
    ReactGa.initialize('UA-160714208-1')

    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="theme-color" content="#000000"></meta>
        <meta name="description" content="Developpeur web freelance sur Lyon, je creer pour vous un site a votre image"></meta>
        <meta name="author" content='Arnaud REY'></meta>
        <meta name='title' content='arnaud rey developpeur auto entrepreneur basé à lyon'></meta>
        <meta charset="utf-8" ></meta>
        <title>Développeur web freelance - Création site internet</title>
      </Helmet>

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mentions" component={Mentionslegales} />
          <Route  path='/404' component={Page404}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
