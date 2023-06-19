import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express'
import path from 'path';
import mainRouter from './routes/rotas'


dotenv.config()

const app = express()

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname,'Views'));
app.engine('mustache',mustache());

app.use(express.static(path.join(__dirname,'../public')));

app.use(mainRouter);

app.use((req, res)=>{
    res.status(404).send('Pagina não encontrada');
    
})

app.listen(process.env.PORT)