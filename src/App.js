import "./App.css";
import Navbar from "./Pages/Home Page/components/Navbar/Navbar";
import HomePage from "./Pages/Home Page/HomePage";
import SearchResult from "./Pages/Search results/SearchResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputSearchProvider from "./context/SearchContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <InputSearchProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search-result" component={SearchResult} />
          </Switch>
        </InputSearchProvider>
      </div>
    </Router>
  );
}

export default App;
