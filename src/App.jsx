import {Routes,Route} from 'react-router-dom';
// components 
import Header from './components/Header';
import Footer from './components/Footer';
// pages 
import Home from './pages/Home';
import Sale from './pages/Sale';
import Category from './pages/Category';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';

function App() {  
  return (
    <>
  <Header/>
  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route path='sale' element={<Sale/>}/>
    <Route path=':productId' element={<SingleProduct/>}/>
    <Route path='category/:category' element={<Category/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
