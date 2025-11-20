import React from 'react';
import '../../styles/base/common/CardPublic.scss'



const GuitarService = (props) => {
    return (
           <div className={`guitar-service ${props.class}`}>
               <div className="guitar-service__count">{props.count}</div>
               <div className="guitar-service__text">
                   <h3 className={`guitar-service__text-header ${props.service}`}>{props.header}</h3>
                   <span className={`guitar-service__text-description ${props.display}`}>{props.title}</span>
               </div>
           </div>

    );
};

export default GuitarService;