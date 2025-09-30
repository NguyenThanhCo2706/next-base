/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export default function InputField({
  register,
  name,
  defaultValue,
  className,
  required,
}: {
  register: UseFormRegister<any>;
  name: string;
  defaultValue?: any;
  className?: string;
  required?: boolean;
}) {
  return (
    <input
      className={className}
      defaultValue={defaultValue}
      required={required}
      {...register(name)}
    />
  );
}
