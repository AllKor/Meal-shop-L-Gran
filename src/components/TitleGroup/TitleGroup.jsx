import React from 'react'
import './TitleGroup.scss'
import shape from '../../assets/images/icons/shape.svg'

const TitleGroup = ({fontSize, titleText, spanTitleText, titleMod}) => {
    return (
        <div className="title-group">
            <img className="title-group__decoration" src={shape} alt="shape" />
                <h2 className={`title-group__title ${titleMod || ""}`} style={{fontSize: fontSize}}>{titleText} {spanTitleText && <span>{spanTitleText}</span>}</h2>
            <img className="title-group__decoration" src={shape} alt="shape" />
        </div>
    )
}


export default TitleGroup