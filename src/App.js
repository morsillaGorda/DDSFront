import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';
import Articulos from './components/Articulos';
import Socios from './components/Socios';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/articulos" element={<Articulos />} />
              <Route path="/socios" element={<Socios />} />

              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
