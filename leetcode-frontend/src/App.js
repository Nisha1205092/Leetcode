import { Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './components/Authentication/authentication.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
    </Routes>
    // <Authentication />
  );
}

export default App;
