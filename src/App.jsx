import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StarterChoice from './pages/StarterChoice';
import getPokemon from './services/pokeApiService';


function App() {
  getPokemon(1)
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/StarterChoice" element={<StarterChoice />} />
        </Routes>
      </main>
    </>
  );
}

export default App
