import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarButtons from './components/NavbarButtons';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarButtons />}/>
      <Route path="/second-path" element={<h1>Hello world 2</h1>}/>
      <Route path="/third-path" element={<h1>Hello world 3</h1>}/>
    </Routes>
  );
}

export default App;
