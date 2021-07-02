import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? `${s.form__control} ${s.error}` : s.form__control}>
            <textarea className={s.form__input} {...props} {...input} />
            {hasError && <span className={s.form__error}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? `${s.form__control} ${s.error}` : s.form__control}>
            <input className={s.form__input} {...props} {...input} />
            {hasError && <span className={s.form__error}>{meta.error}</span>}
        </div>
    )
}

export const Select = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? `${s.form__control} ${s.error}` : s.form__control}>
            <select className={s.form__input} {...props} {...input}>
                {props.options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            {hasError && <span className={s.form__error}>{meta.error}</span>}
        </div>
    )
}

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? `${s.form__control} ${s.error}` : s.form__control}>
            <Element className={s.form__input} {...props} {...input} />
            {hasError && <span className={s.form__error}>{meta.error}</span>}
        </div>
    );
  };
