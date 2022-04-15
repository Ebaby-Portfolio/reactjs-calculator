import React from 'react'

export default function Themes(onClickApplyTheme) {
    return (
        <div className="themes">
            <div name="" className="theme" onClick={(e) => onClickApplyTheme(e)}></div>
            <div name="" className="theme" onClick={(e) => onClickApplyTheme(e)}></div>
            <div name="" className="theme" onClick={(e) => onClickApplyTheme(e)}></div>
            <div name="" className="theme" onClick={(e) => onClickApplyTheme(e)}></div>
        </div>
    )
}