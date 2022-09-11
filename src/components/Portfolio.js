import React, {useState, useEffect} from 'react'
import '../styles/portfolio.css'
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function Portfolio(props) {

    const [even, setEven] = useState(props.id % 2 === 0 ? true : false);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        const titlesleft = gsap.utils.toArray('.portfolio--container');
        const titlesright = gsap.utils.toArray('.portfolio--containerright');

        gsap.from('.portfolio--title', {
            opacity: 0,
            y: -30,
            duration: 2
        });

        gsap.to('.portfolio--title', {
            opacity: 1,
            y: 0,
            duration: 2
        })

        titlesleft.forEach((text, i) => {

            gsap.from(text, {
                opacity: 0,
                x: -1500,
                duration: 1,
            });

        gsap.to(text, {
            scrollTrigger: {
                trigger: text,
                start: "20px 80%",
                end: "20px 50%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            x: 0,
            duration: 1,
        });
        });

        titlesright.forEach((text, i) => {

            gsap.from(text, {
                opacity: 0,
                x: 1500,
                duration: 1,
            });

            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "20px 80%",
                    end: "20px 50%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                x: 0,
                duration: 1,
            });
        });
    }, [])


    return (
        <div className={even ? "portfolio--container" : "portfolio--containerright"}>
            <div className={even ? "portfolio--img" : "portfolio--imgright"}>
                <img src={props.img}></img>
            </div>
            <div className={even ? "portfolio--project" : "portfolio--projectright"}>
                <p className={even ? "portfolio--name" : "portfolio--nameright"}>{props.name}</p>
                <p className={even ? "portfolio--author" : "portfolio--authorright"}>Author: {props.author}, {props.date}</p>
                <span className="portfolio--description">{props.description}</span>
                <div className={even ? "portfolio--buttonleft" : "portfolio--button"}>
                <button className="portfolio--readmore" onClick={() => {
                    props.readMore({img: props.img, name: props.name, author: props.author, date: props.date, description: props.description})
                }}>Rozwiń</button>
                </div>
            </div>
        </div>
    )
}