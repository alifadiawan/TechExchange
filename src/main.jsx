import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage.jsx'
import Shop from './Pages/Shop.jsx'
import DetailShop from './Pages/DetailShop.jsx';
import Keranjang from './Pages/Keranjang.jsx';
import Profile from './Pages/Profile.jsx';
import DashboardAdmin from './Pages/Admin/DashboardAdmin.jsx';
import KelolaTransaksi from './Pages/Admin/KelolaTransaksi.jsx';
import KelolaUser from './Pages/Admin/KelolaUser.jsx';
import KelolaArtikel from './Pages/Admin/KelolaArtikel.jsx';
import JualBarang from './Pages/JualBarang.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ArtikelList from './Pages/ArtikelList.jsx';
import ArtikelDetail from './Pages/ArtikelDetail.jsx';
import Login from './Pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/cart" element={<Keranjang />} />
        <Route path="/profile/alif-adiawan" element={<Profile />} />
        <Route path="/listing/new-listing" element={<JualBarang />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/artikel" element={<ArtikelList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artikel/detail/3123asa-975d-4f74-342342-27e830efe285" element={<ArtikelDetail />} />
        <Route path="/shop/detail/3e132d39-975d-4f74-9060-27e830efe285" element={<DetailShop />} />


        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/transaksi" element={<KelolaTransaksi />} />
        <Route path="/admin/user" element={<KelolaUser />} />
        <Route path="/admin/artikel" element={<KelolaArtikel />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
