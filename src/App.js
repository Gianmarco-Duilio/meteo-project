import NavbarWeather from "./components/NavbarWeather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <NavbarWeather />
      <Welcome />
      <CurrentWeather />
      <Footer />
    </div>
  );
}

export default App;
