/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import SidingGuttersPage from './pages/SidingGutters';
import RoofingGeneralPage from './pages/RoofingGeneral';
import MetalRoofingPage from './pages/MetalRoofing';
import ResidentialSpecialtyPage from './pages/ResidentialSpecialty';
import CommercialSpecialtyPage from './pages/CommercialSpecialty';
import SteelFabricationPage from './pages/SteelFabrication';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/roofing-general" element={<RoofingGeneralPage />} />
            <Route path="/siding-gutters" element={<SidingGuttersPage />} />
            <Route path="/metal-roofing" element={<MetalRoofingPage />} />
            <Route path="/residential-specialty" element={<ResidentialSpecialtyPage />} />
            <Route path="/commercial-specialty" element={<CommercialSpecialtyPage />} />
            <Route path="/steel-fabrication" element={<SteelFabricationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
