import React from 'react';
import '../../styles/base/common/CardPublic.scss'



const GuitarService = (props) => {
    return (

       <div className="service">
           <div className="guitar-service">
               <div className="guitar-service__text">
                   <h3 className="guitar-service__text-header">{props.header}</h3>
                   <p className={`guitar-service__text-header ${props.display}`}>{props.title}</p>
               </div>
               <div className="guitar-service__count">{props.count}</div>
           </div>
       </div>
    );
};

export default GuitarService;