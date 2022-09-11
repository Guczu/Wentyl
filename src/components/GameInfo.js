import React from 'react'
import '../styles/games.css'

export default function GameInfo(props) {

    return (
        <section className="panel red">
            <video src={props.video} className="games--video" loop autoPlay="autoplay" muted></video>
            <div className="gameinfo--container">
                <p className="gameinfo--title">{props.name}</p>
                <p className="gameinfo--description">{props.description}</p>
                <div className="gameinfo--button">DOWNLOAD</div>
            </div>
        </section>
    )
}