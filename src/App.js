import "./App.css";
import Navbar from "./Pages/Home Page/components/Navbar/Navbar";
import HomePage from "./Pages/Home Page/HomePage";
import SearchResult from "./Pages/Search results/SearchResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputSearchProvider from "./context/SearchContext";
import Aboutus from "./Pages/Home Page/components/About us/Aboutus";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <InputSearchProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search-result" component={SearchResult} />
            <Route path="/about-us" component={Aboutus} />
          </Switch>
        </InputSearchProvider>
      </div>
    </Router>
  );
}

export default App;
