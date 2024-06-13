import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import Detalebi from "./pages/Detalebi";

import "./assets/style.css";
import Addblog from "./pages/Addblog";

function App() {

  return (
    <React.Fragment>

      <BrowserRouter>

        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/detalebi/:id" element={<Detalebi />} />
          <Route path="/addblog" element={<Addblog />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);