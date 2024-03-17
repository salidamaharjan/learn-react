type TextFieldProps = {
    placeholder?: string
}

export default function TextField({placeholder}: TextFieldProps) {
  return (
    <input className="border rounded-md p-4 self-stretch" placeholder={placeholder} type="text" />
  );
}
