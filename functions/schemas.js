const Joi = require ('joi')

const userSchemas = (input) => {
    const schema = Joi.object({
        fullName: Joi.string().min(5).required(),
        email: Joi.string().email().required(),
        role: Joi.string().required(),
        level: Joi.number().integer().min(100),
        password : Joi.string().required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w]).{8,}$/).label("Use a valid password!!!"),
        repeat_password: Joi.ref('password')
    })
    .with('password', "repeat_password")
    return schema.validate(input)
}

const loginSchema = (input) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }) 
    return schema.validate(input)
}

module.exports = {
    userSchemas,
    loginSchema
}