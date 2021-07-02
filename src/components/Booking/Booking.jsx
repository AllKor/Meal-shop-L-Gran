import React from 'react'
import TitleGroup from '../TitleGroup/TitleGroup'
import './Booking.scss'
import backgroundImage from '../../assets/images/7.jpg'
import BookingForm from './BookingForm/BookingForm'

const Booking = ({bookingFormHandler, isSending}) => {
    return (
        <div className="booking" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container">
                <div className="booking__inner">
                    <TitleGroup titleText={"Забронируйте уже сейчас"} titleMod={"title-group__title--booking"} />
                    <h3 className="booking__subtitle">Забронируй стол и получи отличный завтрак</h3>
                    <BookingForm isSending={isSending} onSubmit={bookingFormHandler} />
                </div>
            </div>
        </div>
    )
}

export default Booking
