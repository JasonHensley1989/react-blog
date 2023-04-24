import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./Create";
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  // const title = "The Daily Blogger";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/create'>
              <Create />
          </Route>
          <Route path='/blogs/:id'>
              <BlogDetails />
          </Route>
          {/* Goes on bottom else it will match any of the top  */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
