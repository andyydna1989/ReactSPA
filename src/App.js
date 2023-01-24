import Nav from './components/Nav';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import FooterElement from './components/FooterElement';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Careers from './Pages/Careers';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Careers' element={<Careers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default App;