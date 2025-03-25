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
}


export const InputController=  <T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input onBlur={onBlur} onChange={onChange} value={value} ref={ref} placeholder={placeholder}/>
  )}
    />
  );
};
