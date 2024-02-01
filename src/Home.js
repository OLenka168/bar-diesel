import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import afisha from './Photos/afisha.jpg';
import party from './Photos/party.jpg';

function Home() {
    useLayoutEffect(() => {
        if(window.innerWidth >= 950){
        gsap.to('.afisha', {x: 50, opacity: 1, duration: 2, ease:'power2.inOut'})
        gsap.to('.party_right', {x: -50, opacity: 1, duration: 2, ease:'power2.inOut'})
        } else{
            gsap.to('.afisha', {opacity: 1, duration: 2, ease:'power2.inOut'})
            gsap.to('.party_right', {opacity: 1, duration: 2, ease:'power2.inOut'})
        }
    }, 
    [])

    return(
        <div className='party'>
            <div className='afisha'>
                <img src={afisha} alt='pic'/>
            </div>
            <div className='party_right'>
                <img src={party} alt='pic'/>
            </div>
        </div>
    )
}
export default Home;