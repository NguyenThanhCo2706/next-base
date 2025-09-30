/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export default function DateField({
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
      type="date"
      className={className}
      defaultValue={defaultValue}
      required={required}
      {...register(name)}
    />
  );
}
