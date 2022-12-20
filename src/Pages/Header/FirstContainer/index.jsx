import React from 'react'
import {firstData} from './firstData';

const FirstComponent = () => {
    return (
        <div>
            <h2>{firstData.title}</h2>
            <span>{firstData.desc}</span>
            <div className='' style={{backgroundImage: `url('${firstData.img}')`}}></div>
        </div>
    )
}

export default FirstComponent