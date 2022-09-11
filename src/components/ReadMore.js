import React from 'react'
import '../styles/readmore.css'
import x from '../images/x.webp'

export default function ReadMore(props) {
    return (
        <div className="readmore--container">
            <div className="readmore--exit">
                <img src={x} width="50px" onClick={props.readMore}></img>
            </div>
            <p className="readmore--title">{props.name}</p>
            <img src={props.img} className="readmore--img"></img>
            <p className="readmore--author">{props.author} {props.date}</p>
            <div className="readmore--desccontainer">
                <p className="readmore--description">{props.description}</p>
            </div>
        </div>
    )
}