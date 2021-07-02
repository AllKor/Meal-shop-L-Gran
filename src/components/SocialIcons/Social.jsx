import React from 'react'
import SocialIcon from './SocialIcon'

const Social = ({socialItems}) => {
    
    return (
        <div className='social'>
            {socialItems.map(icon => <SocialIcon 
                                        key={icon.name} 
                                        name={icon.name} 
                                        path={icon.path} 
                                        icon={icon.icon} 
                                    />)}
            
        </div>
    )
}

export default Social
