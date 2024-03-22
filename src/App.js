import NavbarWeather from "./components/NavbarWeather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  return (
    <div className="App">
      <NavbarWeather />
      <CurrentWeather />
    </div>
  );
}

export default App;
