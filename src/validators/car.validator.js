import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,50}$')).required().messages({
        'string.empty':'Ошибка!! Заполните форму "model"',
        'string.pattern.base':'Ошибка!! Только буквы, макс 20 символов'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Ошибка!!  Цена в диапозоне от 1 до 1000000',
        'number.min':'Ошибка!! Цена в диапозоне от 1 до 1000000',
        'number.max':'Ошибка!! Цена в диапозоне от 1 до 1000000',

    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Ошибка!! Год в диапозоне от 1900 до текущего',
        'number.min':'Ошибка!! Год в диапозоне от 1900 до текущего',
    })
})