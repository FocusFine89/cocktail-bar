import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
