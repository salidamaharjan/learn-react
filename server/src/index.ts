import express, {Express, Request, Response} from 'express';
import sequelize from './connection';
import Todo from './model/Todo.model';
import todoRouter from './routes/todo.api';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(todoRouter);

async function startApp(){
    await sequelize.sync({ force: true});
    console.log("synched");
    for (let i = 0 ; i < 3; i++){
        await Todo.create({task: `Seed - ${i+1}`});
    }
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
}

startApp();
