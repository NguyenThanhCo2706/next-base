/* eslint-disable @typescript-eslint/no-explicit-any */
import { OptionType } from "@/src/types/common";
import { UseFormRegister } from "react-hook-form";

export default function SelectField({
  register,
  name,
  defaultValue,
  className,
  required,
  options,
}: {
  register: UseFormRegister<any>;
  name: string;
  defaultValue?: any;
  className?: string;
  required?: boolean;
  options: OptionType[];
}) {
  return (
    <select
      className={className}
      defaultValue={defaultValue}
      required={required}
      {...register(name)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
