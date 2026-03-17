import { useGSAP } from '@gsap/react';
import { sliderLists } from '../data';
import { useState, useRef } from 'react';
import gsap from 'gsap';


export const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (index) => {
        const total = sliderLists.length;
        const nextIndex = (index + total) % total;
        setCurrentIndex(nextIndex);
    }

    useGSAP(() => {
        gsap.fromTo( '#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut', delay: 0.5 });
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut', delay: 0.7 });
    }, [currentIndex]);


    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf'/>
            <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf'/>
            <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

            <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
            {sliderLists.map((cocktail, index) => {
                const isActive = index === currentIndex; // Set the first cocktail as active by default
                return (
     
                    <button
                    key={cocktail.id}
                    onClick={() => goToSlide(index)}
                    className={
                        `${isActive 
                        ? "text-white border-white" 
                        : " text-white/50 border-white/50"}`
                    }
                    >
                
                        {cocktail.name}
                    </button>
                    )
                    })}

            </nav>
            <div className='content'>
                <div className='arrows'>
                    <button className='text-right' onClick= {() => goToSlide(currentIndex -1)}>
                        <span>{sliderLists[currentIndex - 1]?.name || sliderLists[sliderLists.length - 1]?.name}</span>
                        <img src='/images/right-arrow.png' alt='right-arrow' aria-hidden="true"></img>
                    </button>
                    <button className='text-left' onClick= {() => goToSlide(currentIndex + 1)}>
                        <span>{sliderLists[currentIndex + 1]?.name || sliderLists[0]?.name}</span>
                        <img src='/images/left-arrow.png' alt='left-arrow' aria-hidden="true"></img>
                    </button>

                </div>
            <div className='cocktail'>
                <img src={sliderLists[currentIndex].image} alt={sliderLists[currentIndex].name} className='cocktail-image'/>
            </div>
            <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for it</p>
                        <p id='title'>{sliderLists[currentIndex].name}</p>
                    </div>
                    <div className='details'>
                        <h2>{sliderLists[currentIndex].title}</h2>
                        <p>{sliderLists[currentIndex].description}</p>

                    </div>

            </div>
            </div>
        </section>





    )

};