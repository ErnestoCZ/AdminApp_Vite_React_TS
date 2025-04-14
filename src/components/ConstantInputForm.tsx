import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Field,
  Flex,
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { InputController } from "./InputController";

enum CONSTANT_TYPE {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

const constantTypesCollection = createListCollection({
  items: [
    { label: "LOW", value: CONSTANT_TYPE.LOW },
    { label: "MEDIUM", value: CONSTANT_TYPE.MEDIUM },
    { label: "HIGH", value: CONSTANT_TYPE.HIGH },
  ],
});

const ConstantInputFormSchema = z.object({
  name: z.string({ message: "Name must be at least 3 characters long" }).min(3),
  description: z.string().optional(),
  value: z.number().gt(0, "Value must be greater than 0"),
  type: z.nativeEnum(CONSTANT_TYPE),
});
type ConstantInputFormValues = z.infer<typeof ConstantInputFormSchema>;

export const ConstantInputForm: FC = () => {
  const { control,reset, handleSubmit, formState: {isSubmitting, errors}, register } = useForm<ConstantInputFormValues>({
    resolver: zodResolver(ConstantInputFormSchema),
    defaultValues: {description: '', name: '', value: ''}
  });

  //TODO fetch current valid Constant values from database via GraphQL customHooks (generated)

  const submitHander: SubmitHandler<ConstantInputFormValues> = async (data) => {
    console.log(data);
    //TODO execute action to backend to create new constant value for Billings
  };

  return (
    <>
      <div>ConstantInputValues</div>
      <form onSubmit={handleSubmit(submitHander)}>
        {
          //Name
        }
        <Field.Root invalid={!!errors.name}>
          <InputController control={control} name="name" placeholder="Name" />
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
        </Field.Root>
        {
          //Description (Optional)
        }
        <Field.Root invalid={!!errors.description}>
          <InputController
            control={control}
            name="description"
            placeholder="Description"
          />
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>
        {
          //Value Input
        }
        <Field.Root invalid={!!errors.value}>
          <InputController control={control} name="value" type="number" placeholder="Value" />
          <Field.ErrorText>{errors.value?.message}</Field.ErrorText>
        </Field.Root>
        {
          //TypeSelect
          //TODO: Fix react hook form for this select component
        }

        <Field.Root>
          <Select.Root collection={constantTypesCollection}>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select Type for new Constant" />
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content {...register('type')}>
                  {constantTypesCollection.items.map((type) => (
                    <Select.Item item={type} key={type.value}>
                      {type.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Field.ErrorText></Field.ErrorText>
        </Field.Root>
        {
            //Form Buttons
        }
        <Flex justifyContent={"flex-start"}>
          <Button
            type="reset"
            variant={"ghost"}
            colorPalette={"red"}
            flex={"0 1 auto"}
            onClick={() => {reset()}}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant={"ghost"}
            colorPalette={"green"}
            flex={"0 1 auto"}
          >
            Submit
          </Button>
        </Flex>
      </form>
      <div>TODO: Current Constant List</div>
      <DevTool control={control} placement="bottom-right"></DevTool>
    </>
  );
};
