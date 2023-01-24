import ballLogo from '../Assets/Ball.png';

const Nav = () => {

 
    
    return(
        <nav className="relative container w-full mx-auto p-6 bg-black rounded-full"> 
        <div className="flex items-center justify-evenly">
            <div className="flex flex-row pt-2 text-white">
                <img src={ballLogo} alt="A tennis ball logo" className="w-1/4"></img> 
                <p className='m-auto ml-2 text-4xl font-extrabold'> AJ's Tennis</p>
            </div>
        
            <div  className='hidden md:flex space-x-8 items-end w-full text-xl text-white' data-testid="linkDiv">
<a href="XXX" className='hover:text-gray-600'>Special Offers</a>
<a href="XXX" className='hover:text-gray-600'>About</a>
<a href="XXX" className='hover:text-gray-600'>Careers</a>
<a href="XXX" className='hover:text-gray-600'>Contact</a>

            </div>
        <a href='XXX' className='hidden md:block p-3 px-6 pt-2 text-white bg-red-600 rounded-full baseline hover:bg-red-300 ml-8 text-center'> Specials</a>
        </div>
        </nav>
    )
}

export default Nav;