import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Adf from './components/Adf'
import Tote from './components/Tote'
import Card from './components/Card'
import Cdv from './components/Cdv'

function App() {
  return (
    <div className="App">
      <Router>
					<div>
						<Switch>
							<Route path="/" exact component={Landing}/>
              <Route  path="/adf" component={Adf} />
              <Route path="/carte" component={Card} />
              <Route path="/tote" component={Tote} />
              <Route path="/cdv" component={Cdv} />
						</Switch>
					</div>
				</Router>
    </div>
  );
}

export default App;
