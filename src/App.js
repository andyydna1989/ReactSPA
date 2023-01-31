
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Catalogue from './Pages/Catalogue';
import Contact from './Pages/Contact';

import specialImg1 from './Assets/Racket4.jpg';
import specialImg2 from './Assets/Racket2.png';
import specialImg3 from './Assets/Racket3.jpg';
import Yonex from './Assets/Yonex.jpg';
import Prince from './Assets/Prince.jpg';
import Volkl from './Assets/Volkl.png';
import Bag from './Assets/RacketBag.jpg';
import Balls from './Assets/TennisBalls.jpg';

function App() {


  // this is the more modern way of doing it.
  const router = createBrowserRouter([
    { path: '/', element:<Layout/>},
    { path: '/Home', element: <Home/>}
  ]);
// and this is how you return it.
// return <RouterProvider router={router} />;


const specialsArray = [
  {
      title: 'Head Super X',
      image: specialImg1,
      price: 120.99,
      text: 'A great racket for beginners, very forgiving and gentle on the arm.'
},
{
  title: 'Wilson Mega',
  image: specialImg2,
  price: 144.99,
  text: "A modern twist on the classic Wilson player's racket."
},
{
  title: 'Babolat Ace',
  image: specialImg3,
  price: 89.99,
  text: "Our last stocks of the 2014 model, still a great choice for the competitive player after a bargain."
}
]

const catalogueArray = [
  
    {
      title: 'Head Super X',
      image: specialImg1,
      price: 120.99,
      text: 'A great racket for beginners, very forgiving and gentle on the arm.'
},
{
  title: 'Wilson Mega',
  image: specialImg2,
  price: 144.99,
  text: "A modern twist on the classic Wilson player's racket."
},
{
  title: 'Babolat Ace',
  image: specialImg3,
  price: 89.99,
  text: "Our last stocks of the 2014 model, still a great choice for the competitive player after a bargain."
},
{
  title: 'Yonex Square',
  image: Yonex,
  price: 99.99,
  text: "Weird square-headed racket exclusively favoured by pizza chefs and airport ground signallers."
}
,
{
  title: 'Volkl C#',
  image: Volkl,
  price: 220.00,
  text: "An anniversary edition of the popular 00s racket."
}
,
{
  title: 'Prince OT',
  image: Prince,
  price: 169.95,
  text: "Whilst not as prevalent as they used to be, Prince still produce a good stick at a competitive price."
}
,
{
  title: 'Head Racket Bag',
  image: Bag,
  price: 55.99,
  text: "Great for porting your kit around, but don't forget about that half-eaten banana you put in there during your last match!"
}
,
{
  title: 'Tennis Balls',
  image: Balls,
  price: 9.99,
  text: "Cheap and cheerful, but perfectly playable."
}

]
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Catalogue' element={<Catalogue inputArray={catalogueArray}/>}/>
          <Route path='/Specials' element={<Catalogue inputArray={specialsArray}/>}/>
       
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Catalogue' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );

  
}
export default App;