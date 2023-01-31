
import { useCallback, useReducer } from "react";


const statsReducer=(state, action) =>{

        console.log("stats retrieved!");
        return( {racketTypes: action.rackets, sales: action.sales, countries:action.countries});
    
}


const FooterElement = ()=>{

const [keyStats, dispatchKeyStats] = useReducer(statsReducer, {racketTypes: 0, sales: 1, countries:2});

const getStats = useCallback(async ()=>{

    console.log("chasing stats");
    try {
        const response = await fetch('http://localhost:3000/rackets');
        if (!response.ok){
            throw new Error("Oh no, we got no data!");
        }
        else{
        const data = await response.json();
        console.log(data);
            dispatchKeyStats({
                rackets: data.rackets,
                sales: data.sales,
                countries: data.countries
            })
        }

    }
    catch(error){
        console.log(error);
    }
  
}, []);
if (!keyStats.racketTypes){
getStats();
}

    return(
<div className="container flex-col mx-auto mt-5">
<div className="flex flex-col md:flex-row align-middle justify-between ">
    <h2 className="m-1 p-2 bg-red-500 text-white w-1/3 text-center rounded-full text-xl md:text-2xl " > Racket Types Stocked <span className=" md:hidden ">: {keyStats.racketTypes}</span></h2>

    <h2 className="m-1 p-2 bg-red-500 text-white w-1/3 text-center rounded-full text-xl md:text-2xl " > Sales to date <span className=" md:hidden ">: {keyStats.sales}</span></h2>
    <h2 className="m-1 p-2 bg-red-500 text-white w-1/3 text-center rounded-full text-xl md:text-2xl " > Countries shipped to <span className=" md:hidden ">: {keyStats.countries}</span></h2>
</div>
<div className="flex  flex-row align-middle justify-between mt-3 mb-3">
<p className="hidden md:block m-1 w-1/3 text-center align-middle text-xl md:text-2xl font-bold mt-1"> {keyStats.racketTypes}</p>
<p className="hidden md:block m-1 w-1/3 text-center align-middle text-xl md:text-2xl font-bold mt-1"> {keyStats.sales}</p>
<p className="hidden md:block m-1 w-1/3 text-center align-middle text-xl md:text-2xl font-bold mt-1"> {keyStats.countries}</p>
</div>
</div>
    )
}

export default FooterElement;