import "./App.css";
import Navbar from "./Pages/Home Page/components/Navbar/Navbar";
import HomePage from "./Pages/Home Page/HomePage";
import UserAccount from "./Pages/UserAccount Page/components/UserAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={UserAccount} />
        </Switch>

        {/* <Header />
        <Services />
        <Aboutus />
        <Ourmission /> */}
      </div>
    </Router>
  );
}

export default App;
