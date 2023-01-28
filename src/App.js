import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bill from './Pages/Bill';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bill/>} />
        <Route path="/bill" element={<Bill/>} />
        <Route path="/bill/:userid/:doctype/:docid" element={<Bill/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
