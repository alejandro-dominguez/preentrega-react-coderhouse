import rocketImg from '../../assets/rocket.svg';
import heroLogo from '../../assets/logo-footer.svg';
import { HomeCarousel } from '../';

const Landing = () => {
    const carouselSlides = [
        {url: "https://i.ibb.co/X3n8nBX/ella-don-4-X-o3-q-Fg-Q-unsplash.png"},
        {url: "https://i.ibb.co/QK50DWq/pexels-rodnae-productions-7915357.png"},
        {url: "https://i.ibb.co/qdkLsyV/ella-don-Ddiw-Ozeqk-DU-unsplash.png"},
        {url: "https://i.ibb.co/7n0zbNW/pexels-yan-krukov-9071735.png"}
    ]

    return (
        <>
        <div className='pt-[60.797px] relative mb-[40rem]'>
            <div className="flex">
                <h1 className='heroH1'>
                    ¡Consigue los mejores equipamientos geek del mercado!
                </h1>
                <h2 className='heroH2'>
                    Porque la vida es demasiado corta para estar jugando mal.
                </h2>
                <div className='heroLogo'>
                    <img src={heroLogo} alt="Geekommerce logo" className='w-full block' />
                </div>
                <div className='heroIcon'>
                    <img src={rocketImg} alt="icono de cohete" className='w-full block'/>
                </div>
                <div className="heroImg">
                    <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                    clipRule="evenodd" strokeLinejoin="round">
                        <clipPath id="heroMask">
                            <path d='M2.217 0c2.348 0 4.661 2.723 8.25 4.484 3.69 1.81 9.375.438 9.375 2.641 0 4.346-4.614 10.125-9.375 10.125-2.52 0-2.54-2.489-4.118-4.066-1.401-1.4-4.507-1.764-4.507-3.809C1.842 5.029-2.543 0 2.217 0z'/>
                        </clipPath>
                        <image width="100%" height="100%" clipPath="url(#heroMask)"
                        preserveAspectRatio="xMidYMid slice" href="https://i.ibb.co/6YGgMLB/hero-img.png" />
                    </svg>
                </div>
            </div>
        </div>
        <HomeCarousel carouselSlides={carouselSlides} />
        </>
    )
}

export default Landing;
