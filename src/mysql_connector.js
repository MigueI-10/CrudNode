"use strict";

//importar el paquete mysql para realizar la conexion, createConnect(para pequeñas bd) y createPool(bd grandes)
import {createPool} from "mysql2/promise" //para trabajar con promesas
import { DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";

const conexion = createPool({ //establecer las caracteristicas de la conexion

    "host": DB_HOST,
    "user": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "port": DB_PORT

});

export default conexion;
