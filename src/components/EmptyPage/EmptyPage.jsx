import React from 'react'
import backgroundImage from '../../assets/images/empty_page.jpg'

const EmptyPage = () => {

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        width: `100%`,
        height: `100vh`
    }

    return (
        <div className="empty-page" style={styles}>
            
        </div>
    )
}

export default EmptyPage
