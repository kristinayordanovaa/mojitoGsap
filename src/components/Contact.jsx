import { useGSAP } from "@gsap/react"
import { openingHours } from "../data"
import {socials} from "../data"
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export const Contact = () => {
useGSAP(() => {
const titleSplit = SplitText.create('#contact h2', { type: 'words' });
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
    },
    ease: 'power1.inOut',
});

timeline
.from(titleSplit.words, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.02,
})
.from('#contact h3, #contact p', {
    opacity: 0,
    yPercent: 20,
    stagger: 0.02,
})
.to ('#f-left-leaf', { y: -100, duration: 1, ease: 'power1.inOut' })
.to ('#f-right-leaf', { y: 100, duration: 1, ease: 'power1.inOut' },'<')
}, []);


    return (

    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf"></img>
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf"></img>
        <div className="content">
            <h2>Where to find us</h2>
            <div>
                <h3>Visit Our Bar</h3>
                <p>123 Cocktail Street, Mixology City, 45678</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@mojito.com</p>
            </div>
             <div>
                
              <h3> Open Every Day</h3> 
             {openingHours.map((item, index) => (
                <p key={index}>
                {item.day}:{item.time}
                </p>
                ))}
            </div>
          <div>
            <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.name} />
                        </a>
                    ))}
                </div>
          </div>
        </div>

           



    </footer>
    )}