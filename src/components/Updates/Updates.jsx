import React from 'react';
import './Updates.css';
import { UpdatesData } from './../Data/Data.js';

function Updates() {
    return (
        <div className="updates-container">
            {UpdatesData.map((update) => (
                <div className="update-card" key={update.id}>
                    <img className="update-img" src={update.img} alt={update.name} />
                    <div className="update-info">
                        <div className="update-header">
                            <span className="update-name">{update.name}</span>
                            <span className="update-notification">{update.noti}</span>
                        </div>
                        <span className="update-time">{update.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Updates;
