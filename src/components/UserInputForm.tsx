import { FC } from "react";
import { DevTool } from "@hookform/devtools";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Field, Flex } from "@chakra-ui/react";
import { InputController } from "./InputController";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useCreateUserMutation } from "@/generated/graphql";

const UserInputFormSchema = z.object({
  firstName: z.string({ message: "First Name is required" }).min(4),
  lastName: z.string({ message: "Last Name is required" }).min(4),
  email: z.string().email({ message: "Email is required" }),
});
type UserInputFormValues = z.infer<typeof UserInputFormSchema>;

export const UserInputForm: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<UserInputFormValues>({
    resolver: zodResolver(UserInputFormSchema),
    defaultValues: { email: "", firstName: "", lastName: "" },
  });
  const [addUser] = useCreateUserMutation({errorPolicy: 'all' });

  const submitHandler: SubmitHandler<UserInputFormValues> = async ({
    firstName,
    lastName,
    email,
  }) => {
    const result = await addUser({
      variables: { userData: { firstName, lastName, email } },
      refetchQueries: ['Users']
    });
    console.log(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Flex direction={"column"} gap={2}>
          <Field.Root invalid={!!errors.firstName}>
            <InputController
              rules={{ required: true }}
              control={control}
              name="firstName"
              placeholder="FirstName"
            />
            <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.lastName}>
            <InputController
              control={control}
              name="lastName"
              placeholder="LastName"
            />
            <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.email}>
            <InputController
              control={control}
              name="email"
              placeholder="email"
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <Flex justifyContent={"flex-start"}>
            <Button
              type="reset"
              variant={"ghost"}
              colorPalette={"red"}
              flex={"0 1 auto"}
              onClick={() => {
                reset();
              }}
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
