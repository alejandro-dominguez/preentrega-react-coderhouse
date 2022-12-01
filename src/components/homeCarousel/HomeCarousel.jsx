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
        <button type='button' className='bg-[#ff7c1a] rounded-full text-slate-900 font-semibold text-lg
        leading-6 text-center text-shadow py-3 px-6 my-6 border-[3px] shadow-sm border-slate-900 uppercase
        hover:text-white hover:border-white hover:shadow-md transition-all'
        onClick={executeScroll}>
            ¡Conoce nuestros<br />productos!
        </button>
        <div className="w-full h-[30rem] pt-8">
            <div className="h-full relative">
                <IoMdArrowDropleftCircle className="absolute text-white/80 hover:text-[#ff7c1a] top-1/2
                transition-colors -translate-y-1/2 left-8 cursor-pointer" size={40} onClick={prevSlide} />
                <IoMdArrowDroprightCircle className="absolute text-white/80 hover:text-[#ff7c1a] top-1/2
                transition-colors -translate-y-1/2 right-8 cursor-pointer" size={40} onClick={nextSlide} />
                <div style={{backgroundImage: `url(${carouselSlides[currentIndex].url})`}} className="bg-cover
                bg-center h-full w-full transition-all duration-[750ms] ease-linear flex flex-col items-center
                justify-start">
                </div>
            </div>
        </div>
        <ItemListContainer refProp={productsListRef} />
        </div>
    )
}

export default HomeCarousel;