import './App.css';
import MercuryOverview from './Pages/Mercury/MercuryOverview';
import MercuryStructure from './Pages/Mercury/MercuryStructure';
import MercurySurface from './Pages/Mercury/MercurySurface';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MercuryOverview />} />
        <Route path='/mercuryStructure' element={<MercuryStructure />} />
        <Route path='/mercurySurface' element={<MercurySurface />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
