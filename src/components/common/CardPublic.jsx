import React from 'react';
import '../../styles/base/common/CardPublic.scss'



const GuitarService = (props) => {
    return (
       <div>
           <div className="guitar-service">
               <div className="guitar-service__count">01</div>
                <div className="guitar-service__text">
                    <div className="guitar-service__text-header">Бесплатная пожизненная настройка
                        каждойкупленной гитары</div>
                    <div className={`guitar-service__text-header ${props.display}`}>ваше идеальное звучание начинается
                        здесь и сейчас</div>
                </div>
           </div>
       </div>
    );
};

export default GuitarService;