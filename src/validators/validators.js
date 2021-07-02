export const requiredField = value => {

    if(value) return undefined

    return "Заполните поле"
}

export const maxLengthCreator = maxLength => value => {

    if(value && value.length > maxLength) return `Max length ${maxLength} symbols`

    return undefined
}