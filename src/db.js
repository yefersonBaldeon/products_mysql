import mysql from "mysql2/promise";

import{DB_USER,DB_DATABASE,DB_HOST,DB_PORT,DB_PASSWORD} from "./config.js"

// Crea un grupo de conexiones (connection pool)
export const pool = mysql.createPool({
  host: DB_HOST, // La dirección del servidor de la base de datos
  user: DB_USER, // Tu nombre de usuario de la base de datos
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});
