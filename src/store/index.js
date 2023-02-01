import { createSlice, configureStore } from '@reduxjs/toolkit';
import specialImg1 from '../Assets/Racket4.jpg';
import specialImg2 from '../Assets/Racket2.png';
import specialImg3 from '../Assets/Racket3.jpg';
import Yonex from '../Assets/Yonex.jpg';
import Prince from '../Assets/Prince.jpg';
import Volkl from '../Assets/Volkl.png';
import Bag from '../Assets/RacketBag.jpg';
import Balls from '../Assets/TennisBalls.jpg';


const initialState = { specialsArray: [
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
  ],
catalogueArray: [{
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
]} ;

const specialsSlice = createSlice({
  name: 'specials',
  initialState: initialState.specialsArray,
  reducers: {
    
  }
});

const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState: initialState.catalogueArray,
    reducers: {
      
    }
  });

const store = configureStore({
  reducer: {special: specialsSlice.reducer, catalogue:catalogueSlice.reducer}
});

export const specialsActions = specialsSlice.actions;
export const catalogueActions = catalogueSlice.actions;
export default store;