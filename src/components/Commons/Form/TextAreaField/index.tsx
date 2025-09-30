/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export default function TextAreaField({
  register,
  name,
  defaultValue,
  className,
  required,
  rows,
  placeholder,
}: {
  register: UseFormRegister<any>;
  name: string;
  defaultValue?: any;
  className?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={className}
      defaultValue={defaultValue}
      required={required}
      {...register(name)}
    />
  );
}
