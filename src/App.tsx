import { useState } from "react";
import MyButton from "./MyButton";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import MyLists from "./MyLists";
import CounterButton from "./CounterButton";
export default function App() {
  const isLoggedIn = true;
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <div className="p-4 flex flex-col gap-1">
      <h1 className="text-green-600">Hello World</h1>
      {isLoggedIn && <Profile />}
      {!isLoggedIn && <LoginForm />}
      <span>
        <MyButton />
      </span>
      <span>
        <CounterButton onClick={handleClick} count={count}/>
      </span>
      <span>
        <CounterButton onClick={handleClick}count={count}/>
      </span>
      <MyLists />
    </div>
  );
}
