
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Specials from './Pages/Specials';
import Contact from './Pages/Contact'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Specials' element={<Specials/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default App;