import "./App.css";
import Navbar from "./Pages/Home Page/components/Navbar/Navbar";
import HomePage from "./Pages/Home Page/HomePage";
import SearchResult from "./Pages/Search results/SearchResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputSearchProvider from "./context/SearchContext";
import Aboutus from "./Pages/About us/Aboutus";
import Jobs from "./Pages/Jobs/Jobs";
import Contact from "./Pages/Contact/Contact";
import Support from "./Pages/Support/Support";
import Footer from "./Pages/Home Page/footer/Footer";
import TermsOfUse from "./Pages/Terms Of Use/TermsOfUse";

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
            <Route path="/jobs" component={Jobs} />
            <Route path="/contact" component={Contact} />
            <Route path="/support" component={Support} />
            <Route path="/TermsOfUse" component={TermsOfUse} />
          </Switch>
        </InputSearchProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
