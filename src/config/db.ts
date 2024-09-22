export default {
  database: process.env.DB_NAME || "postgres",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "postgresPassword",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  schema: process.env.DB_SCHEMA || "public",
  username: process.env.DB_USER || "postgresAdmin",
};
