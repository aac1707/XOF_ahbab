import React from 'react'
import { ReactDOM } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Detail from '../details/detail1.js'
import Detailing from '../details/detail2'
import Detail3 from '../details/detail3'

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Loki(){
    return(
      
         <switch>
             <Route exact path='/art1'>
                 <Detail/>
             </Route>
               <Route exact path='/art2'>
                 <Detailing/>
             </Route>
             <Route exact path='/art3'>
                 <Detail3/>
             </Route>
         </switch>
       
    );
}

export default Loki;

