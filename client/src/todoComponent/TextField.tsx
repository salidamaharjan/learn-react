type TextFieldProps = {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
};

export default function TextField({
  placeholder,
  onChange,
  value,
}: TextFieldProps) {
  return (
    <input
      className="border rounded-md p-4 self-stretch"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  );
}
