import {useState} from 'react';
import TextField from "./todoComponent/TextField";
import Button from "./todoComponent/Button";
import TodoItem from "./todoComponent/TodoItem";
export default function App() {
  const[todos, setTodo] = useState<string[]>([]);
  const[task, setTask] =useState<string>("");
  function handleClick(){
    setTodo([...todos, task]);
    setTask("");
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    event.stopPropagation();
    setTask(event.target.value);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 p-3 px-16">
        <h1 className="font-bold text-5xl">TODO LIST</h1>
        <hr className="border-grey border-2 self-stretch" />
        <TextField placeholder="Add items..." onChange={handleChange} value={task} />
        <Button className="self-start" label="Add" variant="primary" onClick={handleClick}/>
        <ul className="self-stretch flex flex-col gap-2">
          {todos.map((todo)=> <TodoItem key={todo} task={todo}/>)}
        </ul>
      </div>
    </>
  );
}
