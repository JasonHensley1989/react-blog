import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './index.css'

function App() {
  const title = "The Daily Blogger";

  return (
    <div className="App">
       <Navbar />
      <div className="content">
       <Home />
      </div>
    </div>
  );
}

export default App;
