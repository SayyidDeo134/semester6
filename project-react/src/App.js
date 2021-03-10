
import './App.css';
import Front from './Front/Front';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Back from './Back/Back';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" component={Front} exact />
          <Route path="/home" component={Front} />
          <Route path="/admin" component={Back} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
