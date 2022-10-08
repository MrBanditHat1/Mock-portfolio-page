import './App.scss';
import logo from './assets/logo.svg';
import patternApps from './assets/pattern-apps.svg';
import patternGraphicDesign from './assets/pattern-graphic-design.svg';
import patternIllustrations from './assets/pattern-illustrations.svg';
import patternMotionGraphics from './assets/pattern-motion-graphics.svg';
import patternPhotography from './assets/pattern-photography.svg';
import patternUiUx from './assets/pattern-ui-ux.svg';
import amy from './assets/image-amy.webp';
import imageOne from './assets/image-slide-1.jpg';
import imageTwo from './assets/image-slide-2.jpg';
import imageThree from './assets/image-slide-3.jpg';
import imageFour from './assets/image-slide-4.jpg';
import imageFive from './assets/image-slide-5.jpg';
import leftArrow from './assets/icon-arrow-left.svg';
import rightArrow from './assets/icon-arrow-right.svg';
import { useState } from 'react';

//<svg className = 'amy-work__arrows__left'><use href={leftArrow}></use></svg>

const slides = [
  {url: './assets/image-slide-2.jpg', title: 'one'},
  {url: 'https://images8.alphacoders.com/371/371310.jpg', title: 'two'},
  {url: 'https://garmahis.com/wordpress/wp-content/uploads/2010/04/The-Blue-Dream.jpg', title: 'three'},
  {url: 'https://getwallpapers.com/wallpaper/full/c/e/6/320156.jpg', title: 'four'},

]

function AppPersonal() {

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

  return (
    <div className = 'page'>

      <header className = 'header flex'>

        <div>
          <a href = 'google.com'><img src = {logo} alt = 'logo' className = 'logo' /></a>
        </div>

        <nav>
          <ul className = 'flex'>
            <li>
              <a href = '#' className = 'flex'>
                <button className = 'accent'> Free consultation</button>
              </a>
            </li>
          </ul>
        </nav>

      </header>

      <section className = 'intro-text'>
        <h1 className = 'intro-text__title'>Design solutions made easy</h1>
        <p className = 'intro-text__paragraph'>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </section>




      <section className = 'gallery'>
        <div className = 'gallery__card1'>
          <h1 className = 'gallery__card1__text'>Graphic Design</h1>
          <div>
            <img className = 'gallery__card1__image' src = {patternGraphicDesign}/>
          </div>
        </div>

        <div className = 'gallery__card2'>
          <h1 className = 'gallery__card2__text'>UI/UX</h1>
          <div>
            <img className = 'gallery__card2__image' src = {patternUiUx}/>
          </div>
        </div>

        <div className = 'gallery__card3'>
          <h1 className = 'gallery__card3__text'>Apps</h1>
          <div>
            <img className = 'gallery__card3__image' src = {patternApps}/>
          </div>
        </div>

        <div className = 'gallery__card4'>
          <h1 className = 'gallery__card4__text'>Photography</h1>
          <div>
            <img className = 'gallery__card4__image' src = {patternIllustrations}/>
          </div>
        </div>

        <div className = 'gallery__card5'>
          <h1 className = 'gallery__card5__text'>Illustrations</h1>
          <div>
            <img className = 'gallery__card5__image' src = {patternPhotography}/>
          </div>
        </div>

        <div className = 'gallery__card6'>
          <h1 className = 'gallery__card6__text'>Motion Graphics</h1>
          <div>
            <img className = 'gallery__card6__image' src = {patternMotionGraphics}/>
          </div>
        </div>
      </section>

      <main className = 'amy'>
        <div className = 'amy__container'>
          <img src = {amy} className = 'amy__photo' />
        </div>

        <div className = 'amy__content'>
          <h2 className = 'amy__content__title'>I'm Amy, and I'd love to work on your next project</h2>
          <p className = 'amy__content__description'>I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>
          <a><button className = 'amy__content__accent'>Free Consultation</button></a>
        </div>
      </main>

      <section className = 'amy-work'>
        <h2 className = 'amy-work__title'>My work</h2>
        <div className = 'amy-work__cards'>
          
            <img className = 'amy-work__cards__image' src ={imageOne} />
         
       
            <img className = 'amy-work__cards__image' src ={imageTwo} />
       
        
            <img  className = 'amy-work__cards__image' src ={imageThree} />
       
  
            <img  className = 'amy-work__cards__image' src ={imageFour} />

       
            <img  className = 'amy-work__cards__image' src ={imageFive} />
        
        </div>
        <div className = 'amy-work__arrows'>
          <img onClick={PreviousHandler} className = 'amy-work__arrows__left' alt = 'left arrow' src = {leftArrow}/>
          <img onClick={PreviousHandler} className = 'amy-work__arrows__right' alt = 'right arrow' src = {rightArrow}/>
        </div>
      </section>

      <footer className = 'booking'>
        <div className = 'booking__section'>
          <div className = 'booking__section__text'>
            <h2 className = 'booking__section__text__title'>Book a call with me</h2>
            <p className = 'booking__section__text__paragraph'>
              I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a 
              free consultation. Then we can move forward from there.
            </p>
          </div>
          <a><button className = 'booking__section__accent'>Free Consultation</button></a>
        </div>

        <div className = 'booking__footer flex'>  
          <div>
            <a href = '#'><img src = {logo} alt = 'logo' className = 'logo' /></a>
          </div>

          <nav>
            <ul className = 'flex'>
              <li>
                <a href = '#' className = 'flex'>
                  <button className = 'accent'> Free consultation</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      
    </div>
  );
}

export default AppPersonal;
