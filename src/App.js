
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useSelector} from 'react-redux';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Catalogue from './Pages/Catalogue';
import Contact from './Pages/Contact';


function App() {

const catalogueArray = useSelector((state)=>state.catalogue);
const specialsArray = useSelector((state)=> state.special);


  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Catalogue' element={<Catalogue inputArray={catalogueArray} specials={false}/>}/>
          <Route path='/Specials' element={<Catalogue inputArray={specialsArray} specials={true}/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Catalogue' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );

  
}
export default App;