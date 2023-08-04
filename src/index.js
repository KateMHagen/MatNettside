import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx"
import PreviousOrders from "./pages/PreviousOrders.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
          <Route path="previousOrders" element={<PreviousOrders />}/>
          
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM 
  .createRoot(document.getElementById('root'))
  .render(<App/>)
