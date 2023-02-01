import ballLogo from '../Assets/Ball.png';
import { Outlet, Link } from 'react-router-dom';


// this is the top-level routing page.

const Layout = () => {

 
    
    return(
        <>
        <nav className="relative container w-full mx-auto p-6 bg-black rounded-full"> 
        <div className="flex items-center justify-evenly">
            <div className="flex flex-row pt-2 text-white">
                <img src={ballLogo} alt="A tennis ball logo" className="w-1/4"></img> 
                <Link to='/' className='m-auto ml-2 hover:text-gray-600 text-4xl font-extrabold'> AJ's Tennis</Link>
            </div>
        
            <div  className='hidden md:flex space-x-8 items-end w-full text-xl text-white' data-testid="linkDiv">
<Link to='/Specials' className='hover:text-gray-600'>Special Offers</Link>
<Link to='/' className='hover:text-gray-600'>Home</Link>
<Link to='/Careers' className='hover:text-gray-600'>Careers</Link>
<Link to='/Contact' className='hover:text-gray-600'>Contact</Link>

            </div>
        <Link to='/Specials' className='block p-3 px-6 pt-2 text-white bg-red-600 rounded-full baseline hover:bg-red-300 ml-8 text-center'> Specials</Link>
        </div>
        
        </nav>
        <Outlet/>
        </>
    )
}

export default Layout;