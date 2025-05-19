import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LandingPage from './Pages/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
