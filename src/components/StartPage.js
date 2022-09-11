import React, {useEffect} from 'react'
import '../styles/startpage2.css';
import unity from '../images/unity.png'
import {gsap} from 'gsap';

export default function StartPage() {

    useEffect(() => {
        gsap.from(".startpage--bruh", {
            opacity: 0,
            x: -1500,
            duration: 1,
            rotate: 45
        });

        gsap.to(".startpage--bruh", {
            opacity: 1,
            x: 0,
            duration: 1,
            rotate: -5
        });

        gsap.from(".startpage--title", {opacity: 0, duration: 2, delay: .3});
        gsap.to(".startpage--title", {opacity: 1, duration: 2, delay: .3});

        gsap.from(".startpage--description", {opacity: 0, duration: 2, delay: .8});
        gsap.to(".startpage--description", {opacity: 1, duration: 2, delay: .8});

    }, [])

    return (
        <div className="startpage--container">
            <section className="startpage--img">
                <img className="startpage--bruh" src={unity}></img>
            </section>
            <section className="startpage--desc">
                <p className="startpage--title">Wentyl Unity</p>
                <span className="startpage--description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a quam vel mauris dignissim fringilla pretium eget turpis. Fusce suscipit felis faucibus odio suscipit pharetra. Sed in egestas ipsum. In non tortor eros. Integer mi ante, venenatis id dapibus at, porta sed diam. Etiam non urna nec mi dapibus tempus at dapibus nisi. Duis nibh arcu, mattis in diam eu, imperdiet sollicitudin risus. Suspendisse faucibus ligula vel nisi faucibus volutpat. Sed vel leo facilisis, varius quam vitae, ultrices nisl. Nulla purus metus, rhoncus vitae aliquet imperdiet, rhoncus a felis. In iaculis odio sit amet lorem eleifend interdum.
                </span>
            </section>
        </div>
    )
}