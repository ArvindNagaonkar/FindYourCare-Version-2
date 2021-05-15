import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Aboutus from "./components/About us/Aboutus";
import Ourmission from "./components/Our mission/Ourmission";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Aboutus />
      <Ourmission />
    </div>
  );
}

export default App;
