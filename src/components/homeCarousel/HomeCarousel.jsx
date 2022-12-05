import { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { ItemListContainer } from '../../containers/';

const HomeCarousel = ({carouselSlides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const productsListRef = useRef(null)
    const autoScroll = true
    let slideInterval
    let intervalTimer = 6000

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? carouselSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === carouselSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        if (autoScroll) {
            const autoScrollSlider = () => {
                slideInterval = setInterval(nextSlide, intervalTimer)
            }
            autoScrollSlider()
        }
        return () => clearInterval(slideInterval)
    }, [currentIndex, slideInterval, autoScroll])

    const executeScroll = () => productsListRef.current.scrollIntoView()

    return (
        <div className='grid place-items-center'>
            <button type='button' className='rounded-full border-[2.5px] shadow-sm border-[#ff7c1a] bg-white
            uppercase text-white hover:text-slate-900 hover:shadow-md hover:border-slate-900
            transition-all mb-4' onClick={() => executeScroll()}>
                <div className="bg-white p-1 rounded-full">
                    <div className="bg-[#ff7c1a] py-3 px-6 rounded-full">
                        <p className='text-shadow leading-6 text-center font-semibold text-lg'>
                            ¡Conoce nuestros<br />productos!
                        </p>
                    </div>
                </div>
            </button>
            <div className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] pt-8">
                <div className="h-full relative">
                    <IoMdArrowDropleftCircle className="absolute text-white/80 hover:text-[#1a66ff] text-3xl
                    top-1/2 transition-colors -translate-y-1/2 left-4 md:left-8 cursor-pointer drop-shadow-md
                    sm:text-[2.5rem]"
                    onClick={() => prevSlide()} />
                    <IoMdArrowDroprightCircle className="absolute text-white/80 hover:text-[#1a66ff] text-3xl
                    top-1/2 transition-colors -translate-y-1/2 right-4 md:right-8 cursor-pointer drop-shadow-md
                    sm:text-[2.5rem]"
                    onClick={() => nextSlide()} />
                    <div style={{backgroundImage: `url(${carouselSlides[currentIndex].url})`}}
                    className="bg-cover bg-center h-full w-full transition-all duration-[750ms] ease-linear flex
                    flex-col items-center justify-start">
                    </div>
                </div>
            </div>
            <ItemListContainer refProp={productsListRef} />
        </div>
    )
}

export default HomeCarousel;
