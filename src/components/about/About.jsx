import "./about.scss"
import AnimatedShapes from "../AnimatedShapes.jsx"


function About() {
    

   return (
    <div className='about' id='about' >
        <h1 >About Me</h1>
        <AnimatedShapes/>
      
        <div className="info">
            
            <p> 
                I'm a former Civil Engineer. <br/>
                Now I'm interested in Full Stack Web Development and <br/>
                eager to read blogs, articles, magazines about
                the latest developments in the sector.<br/>
            </p>
              

              
        </div>
        
    </div>
      
  )
}

export default About