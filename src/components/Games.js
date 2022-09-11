import React, {useState} from 'react'
import '../styles/games.css'
import video1 from '../images/video1.webm'
import video2 from '../images/video2.webm'
import video3 from '../images/video3.webm'
import back from '../images/back.png'
import {Link} from "react-router-dom";
import GameInfo from "./GameInfo";
import datajson from "../games";
import Portfolio from "./Portfolio";

export default function Games() {
    const [data, setData] = useState(datajson.games);
    const showGames = data.map(item => <GameInfo
            key={item.id}
            id={item.id}
            video={item.video}
            img={item.img}
            name={item.name}
            description={item.description}
        />
    );

    return (
        <section className="container">
            <Link to="/home"><img src={back} className="games--back"></img></Link>
            {showGames}
        </section>
    )
}