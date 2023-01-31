import { Link } from 'react-router-dom';
import racketImg from '../Assets/Racket1.jpg'

const Hero =()=>{

return(
<section>
    <div className="container flex flex-col md:flex-row items-center p-6 mx-auto mt-10 space-y-0 md:space-y-0">
    <div className="flex flex-col mb-32 space-y-12 md: w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"> Andy's Awesome Winter Deals</h1>
        <p className="max-w-sm text-center text-gray-500 md:text-left"> Inspired by the Australian Open? Get new kit ready for Spring!</p>
        <div className="flex justify-center md:justify-start">
        <Link to='/Catalogue' className=' align-middle p-3 px-6  max-h-24 text-white bg-red-600 rounded-full baseline hover:bg-red-300 mx-auto text-center shrink-2 grow-0'> Full Catalogue</Link>
        
        </div>
        </div>
        
        <div className='min-h-10 shrink-1 mx-3'>
        <img src={racketImg} alt="A new tennis racket"></img>
        </div>

    
    </div>
    <p className="text-gray-400 text-center">_____________________________________</p>
</section>
)
}

export default Hero;