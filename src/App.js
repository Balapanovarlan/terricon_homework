import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';
// import User from './pages/User/User';
import Form from './pages/Form/Form';
import Categories from './pages/Categories/Categories';
import Products from './pages/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path='/about' element= {<About/>} />
        <Route path='/form' element = {<Form />}/>
        <Route path='/categories' element = {<Categories/>} />
        <Route path='/categories/:slug'element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
