import React from 'react'
import Theme from './Theme'
import '../stylesheets/theme.css'

export default function Themes({ onClickApplyTheme }) {
    return (
        <div className="themes">
            <Theme name="Azure" bunClass='azure' onClickApplyTheme={onClickApplyTheme} />
            <Theme name="Blond" bunClass='blond' onClickApplyTheme={onClickApplyTheme} />
            <Theme name="Rose" bunClass='rose' onClickApplyTheme={onClickApplyTheme} />
            <Theme name="Verde" bunClass='verde' onClickApplyTheme={onClickApplyTheme} />
        </div>
    )
}