import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDetail/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>
    </Router>
   
  );
}

export default App
