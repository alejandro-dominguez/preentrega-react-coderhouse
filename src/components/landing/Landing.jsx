import { ItemListContainer } from './../../containers/';
import rocketImg from '../../assets/rocket.svg';
import heroLogo from '../../assets/logo-footer.svg';

const Landing = () => {
    return (
        <>
        <div className='pt-[60.797px] relative mb-[40rem]'>
            <div className="flex">
                <h1 className='heroH1 z-10 px-12 pt-8 text-6xl text-slate-800 leading-snug absolute w-[50rem]'>
                    ¡Consigue los mejores equipamientos geek del mercado!
                </h1>
                <h2 className='z-10 px-12 pt-80 text-3xl leading-snug absolute w-[38rem]'>
                    Porque la vida es demasiado corta para estar jugando mal.
                </h2>
                <img src={heroLogo} alt="Geekommerce logo" className='z-10 w-56 absolute ml-12 pt-[30rem]' />
                <img src={rocketImg} alt="icono de cohete" className='z-10 w-20 absolute rotate-45 ml-[40rem]
                pt-[31.5rem]'/>
                <div class="heroImg">
                    <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                    clip-rule="evenodd" stroke-linejoin="round">
                        <clipPath id="heroMask">
                            <path d='M2.217 0c2.348 0 4.661 2.723 8.25 4.484 3.69 1.81 9.375.438 9.375 2.641 0 4.346-4.614 10.125-9.375 10.125-2.52 0-2.54-2.489-4.118-4.066-1.401-1.4-4.507-1.764-4.507-3.809C1.842 5.029-2.543 0 2.217 0z'/>
                        </clipPath>
                        <image width="100%" height="100%" clip-path="url(#heroMask)"
                        preserveAspectRatio="xMidYMid slice" href="https://i.ibb.co/6YGgMLB/hero-img.png" />
                    </svg>
                </div>
            </div>
        </div>
        <ItemListContainer/>
        </>
    )
}

export default Landing;