import * as Joi from 'joi';

export const validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test'),
    DATABASE_URL: Joi.string(),
    PORT: Joi.number().default(5000),
    DB_HOST: Joi.string(),
    DB_PORT: Joi.number().default(5432),
    DB_USER: Joi.string(),
    DB_PASS: Joi.string(),
    DB_DIALECT: Joi.string(),
    DB_NAME: Joi.string(),
});
