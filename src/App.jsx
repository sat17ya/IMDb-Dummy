import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes></Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
