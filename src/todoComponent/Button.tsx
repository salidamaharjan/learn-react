type ButtonProps = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary";
};
export default function Button({ label, className, variant }: ButtonProps) {
  const primary = "bg-black text-white";
  const secondary = "bg-gray-100 text-black";
  let variantVal: string;
  if (variant === "secondary") {
    variantVal = secondary;
  } else {
    variantVal = primary;
  }
  return (
    <button
      className={`border p-2 px-4 rounded-md
    ${variantVal} ${className}`}
    >
      {label}
    </button>
  );
}
