import { useEffect, useState } from 'react';
import Card from '../components/Card'


const Catalogue =(props)=>{
const [renderController, setRenderController] = useState(true);

const [sortedProps, setSortedProps] = useState(props.inputArray);

const initialFilter=useEffect(()=>{
    applyFilter('price H');
    // necessary when navigating to the same component between '/Catalogue' and '/Specials'.
    setSortedProps(props.inputArray)
}, [props])

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
        }
    }


    return (
        <>
    <select onChange = {selectHandler} className='block w-1/3 p-2 bg-black text-white text-center mx-auto mt-8 border-solid border-black border-2 rounded-xl' name='filter'>
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
