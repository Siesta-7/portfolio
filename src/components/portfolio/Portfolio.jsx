import "./portfolio.scss"
import { useEffect, useRef, useState } from "react"

import {data} from "../data.js"
import useOnClickOutside from 'use-onclickoutside'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
function Portfolio() {

  const [check, setCheck] = useState()
  const ref = useRef()
  useOnClickOutside(ref, ()=>setCheck(""))

  return (
    <div className={'portfolio ' + (check && "active")}  id='portfolio'>
        <h1>Recent Projects</h1>  
        <div className="container">
          {data.map(item=>{
            return (
              <>
                <div className="item" onClick={()=>setCheck(item.title)}>              
                  <img src={item.img}/>          
                  <h3>{item.title}</h3>
                  <span>Code practice</span>   
                </div>
                {check === item.title &&
                <div className="detail" >
                  <CloseRoundedIcon className="icon" onClick={()=>setCheck()}/>
                  <div ref={ref} className="card">  
                    <h3>{item.title}</h3>        
                    <div className="image">
                      <img src= {item.img}/>
                    </div>                    
                    <p>{item.info}</p>
                    <button><a href={item.github} style={{textDecoration: "none", color:"white"}}>View on Github</a></button>
                  </div>
              </div> 
              }
                
              </>
            )
          })}
          
        </div>
    </div>
  )
}

export default Portfolio