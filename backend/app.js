import express from 'express';
import cors from 'cors';
import db from './database/database.js';
import router from './routes/routes.js';

const app = express();
const port =3001;

app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/envios', router);




app.listen(app.get("port"), ()=>{
    console.log(`Servidor UP corriendo en el puerto ${app.get("port")} `);
});