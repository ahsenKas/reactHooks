import SayacUygulamasi from "./Components/SayacUygulamasi";
import APIdenVeriCekme from "./Components/APIdenVeriCekme";
import KoşulluRendering from "./Components/Koşullu Rendering";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className="ust-bolum">
        <SayacUygulamasi />
        <APIdenVeriCekme />
      </div>

      <div className="alt-bolum">
        <KoşulluRendering />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
}

export default App;
