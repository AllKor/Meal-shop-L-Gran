import React from 'react';
import './Gallery.scss'
import TitleGroup from '../TitleGroup/TitleGroup'
import image1 from '../../assets/images/gallery/1.jpg'
import image2 from '../../assets/images/gallery/2.jpg'
import image3 from '../../assets/images/gallery/3.jpg'
import image4 from '../../assets/images/gallery/4.jpg'
import image5 from '../../assets/images/gallery/5.jpg'
import image6 from '../../assets/images/gallery/6.jpg'
import image7 from '../../assets/images/gallery/7.jpg'
import backgroundImage from '../../assets/images/8.jpg'

const Gallery = () => {
    return (
        <div className="gallery" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container">
                <div className="gallery__inner">
                    <TitleGroup titleText={"Галерея"} fontSize={"4.5rem"} />
                    <div className="gallery__images">
                        <img className="gallery__image" src={image1} alt="gallery__image" />
                        <img className="gallery__image" src={image2} alt="gallery__image" />
                        <img className="gallery__image" src={image3} alt="gallery__image" />
                        <img className="gallery__image" src={image4} alt="gallery__image" />
                        <img className="gallery__image" src={image5} alt="gallery__image" />
                        <img className="gallery__image" src={image6} alt="gallery__image" />
                        <img className="gallery__image" src={image7} alt="gallery__image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
