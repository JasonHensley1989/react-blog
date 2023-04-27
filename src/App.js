import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./Create";
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
// import handleSubmit from "./handles/handlesubmit";
// import { useRef } from 'react';

// const data = require('./db.json')

function App() {
  // const title = "The Daily Blogger";
  // firebase app
  // const firebaseApp = firebase.apps[0];

  // console.log(data);
  // const dataRef = useRef();


  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   handleSubmit(dataRef.current.value)
  //   dataRef.current.value = ""
  // }

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
          {/* <form onSubmit={submitHandler}>
            <input type= "text" ref={dataRef} />
            <button type = "submit">Save</button>
          </form> */}
        </div>
      </div>
      {/* <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code> */}
    </Router>
  );
}

export default App;
