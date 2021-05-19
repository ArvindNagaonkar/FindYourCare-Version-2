import "./App.css";
import Navbar from "./Pages/Home Page/components/Navbar/Navbar";
import HomePage from "./Pages/Home Page/HomePage";
import SearchResult from "./Pages/Search results/SearchResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search-result" component={SearchResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
