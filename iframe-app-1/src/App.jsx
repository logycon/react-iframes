import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactForm from './pages/ContactForm'
import SettingsForm from './pages/SettingsForm'
import ProfileForm from './pages/ProfileForm'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/settings" element={<SettingsForm />} />
          <Route path="/profile" element={<ProfileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
