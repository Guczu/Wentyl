import React, {useEffect} from 'react'
import avatar from '../images/avatar.webp'
import '../styles/aboutme.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import skill1 from '../images/skill1.png'
import skill2 from '../images/skill2.png'
import skill3 from '../images/skill3.png'
import arrow from '../images/arrow.png'
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import '../styles/app.css';


export default function AboutMe() {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const skills = gsap.utils.toArray('.aboutme--skillname');
        const skillsimg = gsap.utils.toArray('.aboutme--skillimg');

        gsap.from(".aboutme--cont", {
            y: -50,
            opacity: 0,
            delay: .2,
            duration: 1
        });

        gsap.to(".aboutme--cont", {
            y: 0,
            opacity: 1,
            delay: .2,
            duration: 1
        });

        gsap.from(".aboutme--skillstext", {
            opacity: 0,
            delay: 1,
            duration: 1
        });

        gsap.to(".aboutme--skillstext", {
            opacity: 1,
            delay: 1,
            duration: 1
        });

        skills.forEach((text, i) => {

            gsap.from(text, {
                opacity: 0,
                x: -1500,
                duration: 1,
            });

            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "20px 95%",
                    end: "20px 50%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                x: 0,
                duration: 1,
            });
        });

        let delaytime = .6;
        skillsimg.forEach((text, i) => {
            delaytime += .2;
            console.log(delaytime)
            gsap.from(text, {
                opacity: 0,
                duration: 2,
                delay: delaytime
            });

            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "20px 95%",
                    end: "20px 50%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                duration: 2,
                delay: delaytime
            });
            if(delaytime > 1.59) {
                delaytime = .6;
            }
        });


    }, [])

    return (
        <div className="aboutme--container">
            <div className="aboutme--cont">
                <div className="aboutme--imgcontainer">
                    <img src={avatar} className="aboutme--img"></img>
                    <p className="aboutme--imgtext">Wentyl</p>
                </div>
                <div className="aboutme--description">
                    <span className="aboutme--title">O mnie</span>
                    <div className="aboutme--desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, libero a elementum ornare, tortor lorem vestibulum nunc, vitae hendrerit enim tellus efficitur ipsum. Phasellus commodo felis id ipsum molestie dapibus. Curabitur nec pellentesque nibh. Proin et tortor at orci dignissim vestibulum a ut risus. Proin lobortis tortor tellus, at vestibulum risus maximus ut. Quisque id velit eu metus feugiat vehicula. In posuere posuere urna, in laoreet ante lobortis at. Praesent feugiat, augue id vehicula rhoncus, erat mauris vulputate elit, non finibus dolor neque a magna. Nullam consequat augue vitae nisi vulputate iaculis. Vestibulum ut dui et nulla vehicula consectetur a nec sem.
                    </div>
                    <div className="aboutme--skillsandeducation">
                        <div className="aboutme--education">
                            <div className="aboutme--educationdiv">
                            <span>Edukacja</span>
                                <ul>
                                    <li>2137</li>
                                    <li>1337</li>
                                </ul>
                            </div>
                        </div>
                        <div className="aboutme--links">
                            <div className="aboutme--icons">
                                <img src={linkedin} className="aboutme--linked"></img>
                                <img src={github} className="aboutme--github"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutme--skills">
                <p className="aboutme--skillstext">
                    Umiejętności
                </p>
                <div className="aboutme--skillscontainer">
                    <div className="aboutme--skill">
                        <div className="aboutme--skillname">
                            <span>UNITY</span>
                            <img src={arrow} className="aboutme--arrow"></img>
                        </div>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg gray"></img>
                        <img src={skill3} className="aboutme--skillimg gray"></img>
                        <img src={skill3} className="aboutme--skillimg gray"></img>
                    </div>
                    <div className="aboutme--skill">
                        <div className="aboutme--skillname">
                            <span>C#</span>
                            <img src={arrow} className="aboutme--arrow"></img>
                        </div>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg gray"></img>
                        <img src={skill3} className="aboutme--skillimg gray"></img>
                    </div>
                    <div className="aboutme--skill">
                        <div className="aboutme--skillname">
                            <span>GITHUB</span>
                            <img src={arrow} className="aboutme--arrow"></img>
                        </div>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg"></img>
                        <img src={skill3} className="aboutme--skillimg gray"></img>
                    </div>

                </div>
            </div>
        </div>
    )
}