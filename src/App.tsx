import TextField from "./todoComponent/TextField";
import Button from "./todoComponent/Button";
import TodoItem from "./todoComponent/TodoItem";
export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 p-3 px-16">
        <h1 className="font-bold text-5xl">TODO LIST</h1>
        <hr className="border-grey border-2 self-stretch" />
        <TextField placeholder="Add items..." />
        <Button className="self-start" label="Add" variant="primary"/>
        <ul className="self-stretch flex flex-col gap-2">
          <TodoItem task="Item 1"/>
          <TodoItem task="Item 2"/>
          <TodoItem task="Item 3" />
        </ul>
      </div>
    </>
  );
}
