import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LandingPage from './Pages/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx'
import DetailShop from './Pages/DetailShop.jsx';
import Keranjang from './Pages/Keranjang.jsx';
import Profile from './Pages/Profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/cart" element={<Keranjang />} />
        <Route path="/profile/alif-adiawan" element={<Profile />} />
        <Route path="/shop/detail/3e132d39-975d-4f74-9060-27e830efe285" element={<DetailShop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
