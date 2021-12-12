import { body } from 'express-validator';
export const authSchemaBody=[
    body('type').exists({ checkFalsy: true }).trim().withMessage('type can not be null or empty'),
    body('email').exists({ checkFalsy: true }).trim().withMessage('email can not be null or empty'),
    body('password').exists({ checkFalsy: true }).trim().withMessage('password can not be null or empty'),
]