import { FC } from "react";
import { DevTool } from "@hookform/devtools";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Flex } from "@chakra-ui/react";
import { InputController } from "./InputController";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const UserInputFormSchema = z.object({
  firstName: z.string({ message: "First Name is required" }),
  lastName: z.string({ message: "Last Name is required" }),
  email: z.string().email({ message: "Email is required" }),
});
type UserInputFormValues = z.infer<typeof UserInputFormSchema>;

const submitHandler: SubmitHandler<UserInputFormValues> = async (
  formData: UserInputFormValues
) => {
  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 5000));
};

export const UserInputForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: {
      isSubmitting,
    }
  } = useForm<UserInputFormValues>({
    resolver: zodResolver(UserInputFormSchema),
    errors: {},
  });

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Flex direction={"column"} gap={2}>
          <InputController
            control={control}
            name="firstName"
            placeholder="FirstName"
          />
          <InputController
            control={control}
            name="lastName"
            placeholder="LastName"
          />
          <InputController control={control} name="email" placeholder="email" />
          <Flex justifyContent={"flex-start"}>
            <Button
              type="reset"
              variant={"ghost"}
              colorPalette={"red"}
              flex={"0 1 auto"}
            >
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant={"ghost"}
              colorPalette={"green"}
              flex={"0 1 auto"}
            >
              {isSubmitting ? "Submitting.. " : "Submit"}
            </Button>
          </Flex>
        </Flex>
      </form>
      <DevTool control={control} />
    </>
  );
};
