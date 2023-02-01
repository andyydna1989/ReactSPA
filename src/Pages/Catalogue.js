import { useEffect, useState } from 'react';
import Card from '../components/Card'

//this component takes props from the App component in the form of data to populate cards with stock info. Since adding the Redux store some manipulation is required in the
// initialise function to format the object into a useable array. This component also manages the user sort options with the applyFilter() function.

const Catalogue =(props)=>{
const [renderController, setRenderController] = useState(true);
const [sortedProps, setSortedProps] = useState([]);

const initialise = useEffect(()=>{
    setSortedProps([]);
    for (let key of props.inputArray){
        setSortedProps((prevState)=>{return ([...prevState, {title:key.title, price:key.price, text:key.text, image:key.image}])});
    }
    sortedProps.pop();
    applyFilter('price H');
    setRenderController(!renderController)
},[props])

    const selectHandler=(e)=>{
        applyFilter(e.target.value);
        setRenderController(!renderController);
    }

    function applyFilter(selectedFilter){
        switch (selectedFilter){
            case 'price H':
                sortedProps.sort((a, b) => (a.price < b.price) ? 1: (a.price > b.price) ? -1 : 0);
            break;
            case 'price L':
                sortedProps.sort((a, b) => (a.price > b.price) ? 1: (a.price < b.price) ? -1 : 0);
                break; 
            case 'manufacturer':
                sortedProps.sort((a,b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
                break;      
                default: console.log('unrecognised sorting attempt.')
        }
    }

   

    return (
        <>
        <p className={` w-1/3 text-center mx-auto mt-8 text-5xl text-red-500 font-extrabold  ${!props.specials ? 'hidden' : 'block'}`}> RED HOT DEALS!</p>
    <select onChange = {selectHandler} className='block w-1/3 p-2 bg-black text-white text-center mx-auto mt-8 border-solid border-black border-2 rounded-xl' name='filter'>
        <option value=''>Please Select a Filter</option>
        <option value='price H'>Price High-Low</option>
        <option value='price L'>Price Low-High</option>
        <option value='manufacturer'>Manufacturer</option>
    </select>
    <div className="relative-container flex flex-row flex-wrap items-top m-auto justify-evenly w-2/3 sm:flex-row" >
    {sortedProps.map((input, index) => (
        <Card key={index} title={input.title} image={input.image} price={input.price} text={input.text}></Card>
    ))}
    </div>
    </>)
}

export default Catalogue;
