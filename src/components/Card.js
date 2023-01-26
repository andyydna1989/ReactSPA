

const Card = (props)=>{

    return(

<div className="m-3 mt-8 w-1/3 flex flex-col min-h-full shadow-md  hover:bg-gray-200">
<p className="font-bold text-md mx-3 mt-6 mb-1 md:text-xl"> {props.title}</p>
    {/* card image container*/}
    <div className='min-h-10  shrink-1 mx-3'>
        <img src={props.image} ></img>
    </div>
    
    <div className="mt-2 p-2 font-inherit text-sm md:text-lg ">{props.price}</div>
    <div className="hidden md:block mt-1 p-2 font-inherit text-md">{props.text}</div>
</div>
    );
}

export default Card;