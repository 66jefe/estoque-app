import './App.css';
import Movimentacao from './components/movimentacao/Movimentacao';
import Produtos from './components/produtos/Produtos';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Jeferson Movimenta</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Compra/Venda</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
