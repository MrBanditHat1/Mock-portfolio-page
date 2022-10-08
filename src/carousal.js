import './carousal.scss';
import { useState } from 'react';


const slides = [
    {url: 'src/assets/image-slide-2.jpg', title: 'one'},
    {url: 'https://images8.alphacoders.com/371/371310.jpg', title: 'two'},
    {url: 'https://garmahis.com/wordpress/wp-content/uploads/2010/04/The-Blue-Dream.jpg', title: 'three'},
    {url: 'https://getwallpapers.com/wallpaper/full/c/e/6/320156.jpg', title: 'four'},

]


function ImageSlider({slides}){

    const [currentIndex, setCurrentIndex] = useState(0)

    const PreviousHandler = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1: currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const NextHandler = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    

    return(
        <div>
            
            <div className ='slider-styles'>
                <div onClick={PreviousHandler} className = 'left-arrow'>&#x2190;</div>
                <div onClick={NextHandler} className = 'right-arrow'>&#x2192;</div>
                <img className = 'container-styles' src = {slides[currentIndex].url}></img>
            </div>
        </div>
    )
}

function Carousel(){

    return(
        <div className='text'>
            <h1 className='text'>Hello</h1>
            <ImageSlider slides = {slides} />
        </div>
             
    )
};


export default Carousel;