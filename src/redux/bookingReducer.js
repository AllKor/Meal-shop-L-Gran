import  emailjs from "emailjs-com"
import { reset } from "redux-form"

const ENABLE_SENDING = 'bookingReducer/ENABLE_SENDING'
const DISABLE_SENDING = 'bookingReducer/DISABLE_SENDING'

const initialState = {
    isSending: false
}

const bookingReducer = (state = initialState, action) => {

    switch (action.type) {

        case ENABLE_SENDING:
        case DISABLE_SENDING:

            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state
    }
}


export const enableSending = () => {
    return {
        type: ENABLE_SENDING,
        payload: {
            isSending: true
        }
    }
}

export const disableSending = () => {
    return {
        type: DISABLE_SENDING,
        payload: {
            isSending: false
        }
    }
}

export const sendMailThunkCreator = (formData) => async (dispatch) => {
    const serviceId = 'service_75c5tti'
    const templateId = 'template_vyxv6fl'
    const userId = 'user_jyUyq646uFQ2O1j9a6jny'

    try {
        enableSending()

        const response = await emailjs.send(serviceId, templateId, formData, userId)
        
        dispatch(reset("bookingForm"))

        disableSending()
        return response
    } catch (error) {
        console.log(error.message);
        return error.message
    }
}

export default bookingReducer
