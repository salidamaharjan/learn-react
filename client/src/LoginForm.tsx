export default function LoginForm() {
  return (
    <div className="flex justify-center">
      <form className="shadow-[0_0_15px_3px_lightgrey] rounded-md flex flex-col gap-3 p-8 w-[500px]">
        <div className="text-center font-bold text-lg uppercase">Sign In To Your Account</div>
        <input className="border p-2 bg-slate-300" type="text" placeholder="johndoe@gmail.com" />
        <input className="border p-2 bg-slate-300" type="text" placeholder="password" />
        <button className="bg-indigo-500 p-2 text-white uppercase font-bold">Sign In</button>
      </form>
    </div>
  );
}
