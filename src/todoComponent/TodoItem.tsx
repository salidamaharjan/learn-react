import Button from "./Button";

type TodoItemProps = {
  task: string;
};
export default function TodoItem({ task }: TodoItemProps) {
  return (
    <li className="border rounded-md bg-gray-300 p-2 flex justify-between items-center">
      {task}
      <div className="flex gap-2">
      <Button label="Delete" variant="secondary" />
      <Button label="Edit" variant="secondary" />
      </div>
    </li>
  );
}
