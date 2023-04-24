import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = "The Daily Blogger";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route path='/'>
              <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
