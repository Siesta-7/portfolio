import "./intro.scss"
import { Typewriter } from 'react-simple-typewriter'

  function Intro() {
  
  return (
   
    <div className='intro' id="intro">
        <div className="left" >
          <div className="imgContainer">
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi, It's</h2>
            <h1>Burhan Avcı</h1>
            <h3>I'm a <span>
               <Typewriter words={['Web Designer', 'Full Stack Developer', 'Podcast Lover']}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={20}
                delaySpeed={1500}/>
              </span>
            </h3>
          </div>
          <a href="#about">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Intro