import React from 'react'
import '../stylesheets/theme.css'

export default function Theme({ name, bunClass, onClickApplyTheme }) {
    return (
        <div name={name} className="theme" onClick={() => onClickApplyTheme(name)}>
            <div className="buns">
                <div className={`bun ${bunClass}`}></div>
                <div className="bun white"></div>
                <div className={`bun ${bunClass}`}></div>
            </div>
            <div className='name'>{name}</div>
        </div>
    )
}