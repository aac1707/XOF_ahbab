import React from 'react'
import './event.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
function Event(){
    return(  

      <div className="container" style={{padding :'5%'}}>
      {/* <h1>Photo Gallery Grid</h1> */}
   
    <div className="photo-grid ">
      <div className="card" style={{ 
      backgroundImage: `url("https://i.imgur.com/LsIZ8Gp.jpeg")` 
    }}>
          <Link to ='/robo'>Apply</Link>
    
    </div>
   
    
      <div className="card card-tall card-wide" style={{ 
          backgroundImage: `url("https://i.imgur.com/LsIZ8Gp.jpeg")` 
        }}>
          <Link to ='/clubs'>Apply</Link>
    </div>
    
    
      <div className="card" style={{ 
      backgroundImage: `url("https://i.imgur.com/LsIZ8Gp.jpeg")` 
    }}>
          <Link to ='/art'>Apply</Link>
    </div>
  
    
      <div className="card" style={{ 
      backgroundImage: `url("https://i.imgur.com/LsIZ8Gp.jpeg")` 
    }}>
          <p>abc</p>
    </div>
 
      <div className="card" style={{ 
      backgroundImage: `url("https://i.imgur.com/LsIZ8Gp.jpeg")` 
    }}>
          <p>abc</p>
    </div>
 
      <div className="card" style={{ 
      backgroundImage: `url("https://i.imgur.com/LsIZ8Gp.jpeg")`
    }}>
          <p>abc</p>
    </div>
    
    </div>
     </div>

  
      
    );
}

export default Event;