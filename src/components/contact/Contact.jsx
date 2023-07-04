import "./contact.scss"
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Contact() {
  


  const form = useRef()
  const [check, setCheck] = useState(
    {success:false,
      error:false
    }
  ) 

  const handleSubmit=(e)=>{
    e.preventDefault()
    setCheck(prev=>{return({...prev, success:false})})
    emailjs.sendForm('service_op906u6', 'template_ism6w85', form.current, 'Se0D9L17RD-FTiIgE')
      .then((result) => {
       
          console.log(result.text);
          setCheck(prev=>{return(
            {...prev,
            success:true}
          )})
      }, (error) => {
          console.log(error.text);
       
          setCheck(prev=>{return(
            {
              ...prev,
              error:true
            }
          )})
      });
      
      e.target.reset()
  }

  const squareVariants = {
    hidden: {  position:"absolute", top:"50px", left:"-500px", },
    visible: { position:"absolute", top: "50px", left: "100px",  transition: { duration: 0.8 } }
    
  };
  const squareVariants2 = {
    hidden: {  position:"absolute", top:"0px", right:"-500px", },
    visible: {  position:"absolute", top: "0px", right: "100px",  transition: { duration: 0.8 } },
    hiddenmobile: {position:"absolute", top:"80px", right:"-95px" }
  };

const controls = useAnimation();
const controls2 = useAnimation();
const [ref1, inView] = useInView();
const [ref2, inView2] = useInView();
const isMobile = window.innerWidth < 540; 

useEffect(() => {
  
    if (isMobile){

      controls2.start("hiddenmobile")
    }

    if (inView ) {
      
      controls.start("visible");
      controls2.start("visible");
    }
  
  
  
}, [controls, controls2, inView, inView2]);

  return (
 
    <div className='contact' id='contact'>
      <motion.div
        ref={ref1}
        animate={controls}
        initial="hidden"
        variants={squareVariants} 
        className="left" > 
          <div className="image">
            <img src="assets/shake.svg" alt="" />
          </div>
        </motion.div>
        <motion.div ref={ref2}
        animate={controls2}
        initial="hidden"
        variants={squareVariants2}
        className="right">
          <h1>Contact</h1>
          <form ref={form} onSubmit={handleSubmit} method="post">
            <input type="email" name="user_email" className="input email" placeholder="Email" required/>
            <textarea name="message" className="input subject" placeholder="Your message" required/>
            <button type="submit" >Send Message</button>
          </form>
          {check.error ? "Something went wrong I'll be working on ASAP" : (
           
              check.success && <span >Your message sent successfully I'll reply ASAP :)</span>
            
          )}
        </motion.div>
        
    </div>
 
  )
}

export default Contact