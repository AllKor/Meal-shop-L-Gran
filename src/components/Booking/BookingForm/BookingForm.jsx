import React from 'react'
import './BookingForm.scss'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { Input, Select } from '../../../FormControls/FormsControls'
import { requiredField } from '../../../validators/validators'

const BookingForm = ({handleSubmit, error, isSending}) => {

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__item">
                <label htmlFor="name" className="booking-form__label">Ваше имя</label>
                <Field name="name" id="name" placeholder="Введите ваше имя..." component={Input} validate={[requiredField]} />
            </div>
            <div className="booking-form__item">
                <label htmlFor="email" className="booking-form__label">Ваш email</label>
                <Field name="email" id="email" placeholder="Введите ваш email..." component={Input} validate={[requiredField]} />
            </div>
            <div className="booking-form__item">
                <label htmlFor="peoplesNumber" className="booking-form__label">Количество людей</label>
                <Field name="peoplesNumber" id="peoplesNumber" component={Select} options={[1,2,3]} validate={[requiredField]} />
            </div>
            <div className="booking-form__item">
                <label htmlFor="time" className="booking-form__label">Время</label>
                <Field name="time" id="time" type="time" component={Input} validate={[requiredField]} />
            </div>
            <div className="booking-form__item">
                <label htmlFor="date" className="booking-form__label">Дата</label>
                <Field name="date" id="date" type='date' min="2021-01-01" component={Input} validate={[requiredField]} />
            </div>
            <div className="booking-form__item">
                <label htmlFor="phone" className="booking-form__label">Ваш телефон</label>
                <Field name="phone" id="phone" type="tel" placeholder="+1-XXX-XXX" component={Input} validate={[requiredField]} />
            </div>
            <button className="booking-form__button" disabled={isSending}>Отправить</button>
            {error && <span className="booking-form__error">{error}</span>}
        </form>
    )
}

export default reduxForm({form: "bookingForm"})(BookingForm)
