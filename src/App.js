import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Shop />
        </div>
      </Router>
    </>
  );
}

export default App;
