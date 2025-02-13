import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';
// import User from './pages/User/User';
import Form from './pages/Form/Form';
import Categories from './pages/Categories/Categories';
import Products from './pages/Products/Products';
import StepForm from './components/StepForm/StepForm';
import UncotrolledForm from './pages/UncotrolledForm/UncotrolledForm';

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
        <Route path='/stepForm' element = {<StepForm/>}/>
        <Route path='/uncontrolled' element={<UncotrolledForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
