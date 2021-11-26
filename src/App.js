import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className='body'>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
