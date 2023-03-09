import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateTask from "./createtask";
import ManageTask from "./managetask";


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <h2 style={{ background: "#b84dff", color: "white", textAlign: "center" }}>Task Management</h2>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/createtask' element={<CreateTask />} />
            <Route path="/managetask" element={<ManageTask />} />
            
        </Routes>
    </BrowserRouter>
)