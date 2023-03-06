import './App.css';

import MercuryOverview from './Pages/Mercury/MercuryOverview';
import MercuryStructure from './Pages/Mercury/MercuryStructure';
import MercurySurface from './Pages/Mercury/MercurySurface';

import VenusOverview from './Pages/Venus/VenusOverview';
import VenusStructure from './Pages/Venus/VenusStructure';
import VenusSurface from './Pages/Venus/VenusSurface';

import EarthOverview from './Pages/Earth/EarthOverview'; 
import EarthStructure from './Pages/Earth/EarthStructure';
import EarthSurface from './Pages/Earth/EarthSurface';

import MarsOverview from './Pages/Mars/MarsOverview';
import MarsStructure from './Pages/Mars/MarsStructure';
import MarsSurface from './Pages/Mars/MarsSurface';

import JupiterOverview from './Pages/Jupiter/JupiterOverview';
import JupiterStructure from './Pages/Jupiter/JupiterStructure';
import JupiterSurface from './Pages/Jupiter/JupiterSurface';

import SaturnOverview from './Pages/Saturn/SaturnOverview';
import SaturnStructure from './Pages/Saturn/SaturnStructure';
import SaturnSurface from './Pages/Saturn/SaturnSurface';

import UranusOverview from './Pages/Uranus/UranusOverview';
import UranusStructure from './Pages/Uranus/UranusStructure';
import UranusSurface from './Pages/Uranus/UranusSurface';

import NeptuneOverview from './Pages/Neptune/NeptuneOverview';
import NeptuneStructure from './Pages/Neptune/NeptuneStructure';
import NeptuneSurface from './Pages/Neptune/NeptuneSurface';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MercuryOverview />} />
        <Route path='/mercuryStructure' element={<MercuryStructure />} />
        <Route path='/mercurySurface' element={<MercurySurface />} />

        <Route path='/venusOverview' element={<VenusOverview />} />
        <Route path='/venusStructure' element={<VenusStructure />} />
        <Route path='/venusSurface' element={<VenusSurface />} />

        <Route path='/earthOverview' element={<EarthOverview />} />
        <Route path='/earthStructure' element={<EarthStructure />} />
        <Route path='/earthSurface' element={<EarthSurface />} />

        <Route path='/marsOverview' element={<MarsOverview />} />
        <Route path='/marsStructure' element={<MarsStructure />} />
        <Route path='/marsSurface' element={<MarsSurface />} />

        <Route path='/jupiterOverview' element={<JupiterOverview />} />
        <Route path='/jupiterStructure' element={<JupiterStructure />} />
        <Route path='/jupiterSurface' element={<JupiterSurface />} />

        <Route path='/saturnOverview' element={<SaturnOverview />} />
        <Route path='/saturnStructure' element={<SaturnStructure />} />
        <Route path='/saturnSurface' element={<SaturnSurface />} />

        <Route path='/uranusOverview' element={<UranusOverview />} />
        <Route path='/uranusStructure' element={<UranusStructure />} />
        <Route path='/uranusSurface' element={<UranusSurface />} />

        <Route path='/neptuneOverview' element={<NeptuneOverview />} />
        <Route path='/neptuneStructure' element={<NeptuneStructure />} />
        <Route path='/neptuneSurface' element={<NeptuneSurface />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
