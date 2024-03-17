export default function MyButton() {
  function handleClick(){
    alert("You Clicked Me");
  }
    return <button className="border border-black p-1 rounded-md" onClick={handleClick}>Click Me</button>;
  }
  