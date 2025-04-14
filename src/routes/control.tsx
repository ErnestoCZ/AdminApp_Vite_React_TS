import { Box, Button, Center, Flex, HStack, Input, Separator, Stack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { UserInputForm } from "@/components/UserInputForm";
import { List } from "@/components/List";
import { User, useUsersQuery } from "@/generated/graphql";
import { useState } from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
// import { useAllUsers } from '@/graphql/hooks'
import { ListItem } from "@/components/ListItem";
import { ConstantInputForm } from "@/components/ConstantInputForm";

export const Route = createFileRoute("/control")({
  component: RouteComponent,
});

const renderUser = (item: User) => {
  return (
    <ListItem key={item.id}>
      <Flex justifyContent={"space-between"}>
        <Stack direction={"row"} key={item.id}>
          <Box alignContent={"center"}>{item.firstName}</Box>
          <Box alignContent={"center"}>{item.lastName}</Box>
        </Stack>
        <HStack gap={0}>
          <Button
            size={"sm"}
            color={"red"}
            variant={"ghost"}
            background={"transparent"}
          >
            <RiEditLine />
          </Button>

          <Button
            size={"sm"}
            color={"red"}
            variant={"ghost"}
            background={"transparent"}
          >
            <RiDeleteBinLine />
          </Button>
        </HStack>
      </Flex>
    </ListItem>
  );
};

function RouteComponent() {
  const [suggestion, setSuggestion] = useState<string>("");

  const { data, error } = useUsersQuery({
    variables: {
      limit: 20,
      offset: 0,
    },
  });
  const users =
    data?.Users.items.filter((element) =>
      element.lastName?.toLowerCase().includes(suggestion.toLowerCase())
    ) ?? [];

  return (
    <Stack direction={"row"} width={"100%"} height={"100%"}>
      <Stack
        direction={"column"}
        flex={"1 1 auto"}
        padding={2}
        minWidth={"30%"}
      >
        UserInputForm
        <UserInputForm />
        <Separator></Separator>
        <ConstantInputForm/>
      </Stack>

      <Stack
        direction={"column"}
        flex={"2 1 auto"}
        padding={2}
        minWidth={"50%"}
        maxHeight={"70%"}
      >
        UserList
        <Input
          type="search"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Search"
        />
        {error ? <Center> {`${error.message} data`}</Center> :<List<User> items={users} render={renderUser} />}
      </Stack>
    </Stack>
  );
}
