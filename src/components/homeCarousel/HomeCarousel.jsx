import { useState, useEffect } from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

const HomeCarousel = ({carouselSlides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const autoScroll = true
    let slideInterval
    let intervalTimer = 5000

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

    return (
    <div className="w-full h-[30rem] pt-8">
        <div className="h-full relative">
            <IoMdArrowDropleftCircle className="absolute text-white/80 hover:text-white top-1/2
            transition-colors -translate-y-1/2 left-8 cursor-pointer" size={40} onClick={prevSlide} />
            <IoMdArrowDroprightCircle className="absolute text-white/80 hover:text-white top-1/2
            transition-colors -translate-y-1/2 right-8 cursor-pointer" size={40} onClick={nextSlide} />
            <div style={{backgroundImage: `url(${carouselSlides[currentIndex].url})`}}
            className="bg-cover bg-center h-full w-full transition-all duration-700 ease-linear" />
        </div>
    </div>
    )
}

export default HomeCarousel;