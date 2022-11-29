import express from 'express';
import cors from 'cors';
import conn from './database/database.js';
import router from './routes/routes.js';
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port =3001;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/envios', router);

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log(`API Rest is Started in port : ${process.env.PORT}.....`)
    conn();
});


//app.listen(app.get("port"), ()=>{
//    console.log(`Servidor UP corriendo en el puerto ${PORT} `);
//});