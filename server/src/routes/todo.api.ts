import Todo from "../model/Todo.model";
import Express from "express";
import { Request, Response } from "express";
const todoRouter = Express.Router();

todoRouter.get("/api/tasks", async (req: Request, res: Response) => {
  try {
    const allTasks = await Todo.findAll();
    res.status(200).json(allTasks);
  } catch (err) {
    if (err) {
      res.status(400).json(err);
    }
  }
});

todoRouter.post("/api/tasks", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    await Todo.create({ task: req.body.task });
    res.status(200).json(["message: task created"]);
  } catch (err) {
    if (err) {
      res.status(400).json(err);
    }
  }
});

todoRouter.put("/api/tasks/:id", async (req: Request, res: Response) => {
  try {
    const taskById = await Todo.update(
      { task: req.body.task },
      { where: { id: req.params.id } }
    );
    res.status(200).json(["message: task updated"]);
  } catch (err) {
    if (err) {
      res.status(400).json(err);
    }
  }
});

todoRouter.delete("/api/tasks/:id", async(req: Request, res: Response) => {
    try{
        await Todo.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json(['message: task deleted!']);
    }catch(err){
        res.status(400).json(err);
    }
});

export default todoRouter;
