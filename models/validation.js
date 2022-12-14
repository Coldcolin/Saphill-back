const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string().email().lowercase().required()
})
    // .with('username', 'birth_year')
    // .xor('password', 'access_token')
    // .with('password', 'repeat_password');


module.exports = schema