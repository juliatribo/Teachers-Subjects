import express from 'express';
import morgan from 'morgan'; //es un middleware, capa de programari que es troba entre el sistema operatiu i les aplicacions del sistema
import path from 'path';
import cors from 'cors';

const app = express();
//todo lo que la funcion expres retorne se guaradara en la constante app
//express creara un objeto app con el cual se definirán rutas, middlewares y demás características con las que cuenta express.

import indexRoutes from './routes/index'

//settings
app.set('port', process.env.PORT || 4000); //si tiene puerto ya el servidor con process.env.port usara ese sino el 4000

//middlewares
app.use(morgan('dev')); //usa el morgan en la opcion de desarrollo lo que hara es mostrarme mensajes por consola a medida que los usuarios pidan cosas la servidor
app.use(cors());
app.use(express.json()); //como hablo con una api necesito que express entienda json (porque los ficheros de la api son json)

//routes
app.use('/api',indexRoutes); //cada vez que llegue una ruta a http://localhost:4000/api se manejara con el archivo indexRoutes


export default app;
//exportamos app para poder importarlo en index