import Card from '../components/Card'
import specialImg1 from '../Assets/Racket4.jpg'
import specialImg2 from '../Assets/Racket2.png'
import specialImg3 from '../Assets/Racket3.jpg'

const Specials =()=>{

    const specialsArray = [
        {
            title: 'Head Super X',
            image: specialImg1,
            price: '£120.99',
            text: 'A great racket for beginners, very forgiving and gentle on the arm.'
    },
    {
        title: 'Wilson Mega',
        image: specialImg2,
        price: '£144.99',
        text: "A modern twist on the classic Wilson player's racket."
    },
    {
        title: 'Babolat Ace',
        image: specialImg3,
        price: '£89.99',
        text: "Our last stocks of the 2014 model, still a great choice for the competitive player after a bargain."
    }
]
    return (<div className="relative-container flex flex-row items-top m-auto justify-evenly w-2/3 sm:flex-row" >
    {specialsArray.map((special, index) => (
        <Card key={index} title={special.title} image={special.image} price={special.price} text={special.text}></Card>
    ))}
    </div>)
}

export default Specials;
