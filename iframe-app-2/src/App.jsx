import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegistrationForm from './pages/RegistrationForm'
import PreferencesForm from './pages/PreferencesForm'
import AdvancedForm from './pages/AdvancedForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/preferences" element={<PreferencesForm />} />
          <Route path="/advanced" element={<AdvancedForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
