import SayacUygulamasi from "./Components/SayacUygulamasi";
import APIdenVeriCekme from "./Components/APIdenVeriCekme";
import KoşulluRendering from "./Components/Koşullu Rendering";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SayacUygulamasi />
      <APIdenVeriCekme />
      <KoşulluRendering />
    </div>
  );
}

export default App;
