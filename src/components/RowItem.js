import React from 'react';
import '../assets/css/RowItem.css';
import tickBlueIcon from '../assets/img/tick-blue.png';
import tickGrayIcon from '../assets/img/tick-gray.png';


function RowItem({isSelected, tickIcon, title, userIcon, day, markColor, backgroundColor}) {
    return (
    <div className="row-item" style={ isSelected ? {} : { backgroundColor:'#FBFBFB'} }>
        <img src={isSelected ? tickBlueIcon : tickGrayIcon} alt="tick" />
        <h3>{title}</h3>
        <img src={userIcon} alt="user-icon" />
        <span>{day}</span>
        <div style={{backgroundColor:markColor}}></div>
    </div>
    );
}

export default RowItem;