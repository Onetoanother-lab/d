import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages for performance
const Muammo = lazy(() => import('./pages/Muammo'));
const Tasir = lazy(() => import('./pages/Tasir'));
const Adolatsizlik = lazy(() => import('./pages/Adolatsizlik'));
const Dalillar = lazy(() => import('./pages/Dalillar'));
const Axloq = lazy(() => import('./pages/Axloq'));
const Masuliyat = lazy(() => import('./pages/Masuliyat'));
const Kelajak = lazy(() => import('./pages/Kelajak'));
const References = lazy(() => import('./pages/References'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Muammo />} />
            <Route path="/tasir" element={<Tasir />} />
            <Route path="/adolatsizlik" element={<Adolatsizlik />} />
            <Route path="/dalillar" element={<Dalillar />} />
            <Route path="/axloq" element={<Axloq />} />
            <Route path="/masuliyat" element={<Masuliyat />} />
            <Route path="/kelajak" element={<Kelajak />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;