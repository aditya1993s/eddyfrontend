import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfraTable from "./components/InfraTable";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfraTable />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
