type CounterButtonProps = {
  onClick: () => void;
  count: number;
};
export default function CounterButton(props: CounterButtonProps) {
  return (
    <button
      className="border border-black p-1 rounded-md"
      onClick={props.onClick}
    >
      clicked = {props.count}
    </button>
  );
}

function addNum (num1: number, num2: number): number {
  return num1 + num2;
}