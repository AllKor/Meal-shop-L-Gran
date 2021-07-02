import React from 'react'
import Booking from './Booking'
import { useDispatch, useSelector } from 'react-redux'
import { sendMailThunkCreator } from '../../redux/bookingReducer'
import { getIsSending } from '../../redux/bookingSelector'

const BookingContainer = () => {
    const dispatch = useDispatch()
    const isSending = useSelector(state => getIsSending(state))

    const bookingFormHandler = async (formData) => {
        dispatch(sendMailThunkCreator(formData))
    }

    return <Booking isSending={isSending} bookingFormHandler={bookingFormHandler} />
}

export default BookingContainer
