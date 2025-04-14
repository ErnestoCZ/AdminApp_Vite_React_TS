import { Input } from "@chakra-ui/react";
import {
  Controller,
  FieldValues,
  Path,
  Control
} from "react-hook-form";

//TODO extend the props for any props of Input

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>
  rules?: object;
  defaultValue?:string
  placeholder?: string
  type?: string | "text" //TODO: Search for Proper type notation
}


export const InputController=  <T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  type
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input onBlur={onBlur} onChange={onChange} value={value} ref={ref} placeholder={placeholder} type={type}/>
  )}
    />
  );
};
