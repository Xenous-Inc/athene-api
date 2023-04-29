export const configuration = () => ({
    port: parseInt(process.env.PORT, 10) || 5000,
    environment: process.env.NODE_ENV,
    db_host: process.env.DB_HOST,
    db_port: parseInt(process.env.DB_PORT, 10) || 5432,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_dialect: process.env.DB_DIALECT,
    db_name: process.env.DB_NAME,
});
