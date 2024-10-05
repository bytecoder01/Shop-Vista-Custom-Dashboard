import React from 'react';
import './Panels.css';
import { PanelsData } from './../Data/Data';
import Panel from './../Panel/Panel';

function Panels() {
    return (
        <div className='Panels'>
            {PanelsData.map((card, id) => (
                <div className="Parent" key={id}>
                    <Panel
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series} 
                    />
                </div>
            ))}
        </div>
    );
}

export default Panels;
