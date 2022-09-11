import React,{useState} from 'react'
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";
import Delayed from "./components/Delayed";
import Games from "./components/Games";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { Routes, Route } from 'react-router-dom';
import datajson from './projects'
import ReadMore from "./components/ReadMore";
import './styles/app.css'

export default function App() {

    const [data, setData] = useState(datajson.projects);
    const [showMore, setShowMore] = useState(false);
    const [readComponent, setReadComponent] = useState({});

    const showPortfolio = data.map(item => <Portfolio
                key={item.id}
                id={item.id}
                img={item.img}
                date={item.date}
                author={item.author}
                name={item.name}
                description={item.description}
                readMore={readMore}
            />
    );

    function readMore(readmoredata) {
        setShowMore(oldState => !oldState)

        if(readmoredata) {
            setReadComponent(<ReadMore
                readMore={readMore}
                img={readmoredata.img}
                name={readmoredata.name}
                author={readmoredata.author}
                date={readmoredata.date}
                description={readmoredata.description}
            />)
        }
    }

  return (
      <div className="app--container">
          {showMore && readComponent}
          <Routes>
              <Route path="/" element={<React.Fragment><Logo /><Delayed waitBeforeShow={3000}><Navbar /><StartPage /></Delayed></React.Fragment>} />
              <Route path="/home" element={<React.Fragment><Navbar /><StartPage /></React.Fragment>} />
              <Route path="/games" element={<Games />} />
              <Route path="/portfolio" element={
                  <React.Fragment>
                      <Navbar />
                  <p className="portfolio--title">PROJECTS</p>
                  <div className="portfolio">
                      {showPortfolio}
                  </div>
                  </React.Fragment>
              } />
              <Route path="/about" element={<React.Fragment><Navbar /><AboutMe /></React.Fragment>} />
              <Route path="/contact" element={<React.Fragment><Navbar /><Contact /></React.Fragment>} />
          </Routes>
      </div>
  )

}