import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Box, Flex, Group, Heading, Separator, Stack } from "@chakra-ui/react";
export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    <div>404 Not Found</div>;
  },
});

function RootComponent() {
  return (
    <React.Fragment>
      <Stack direction={"column"} height={"100vh"}>
        <Flex flexGrow={0} height={"5rem"} alignItems={'center'} justifyContent={'center'} flex={'1 0 auto'}>
          <Heading size={'3xl'}>Admin App</Heading>
        </Flex>
        <Separator></Separator>
        
        <Flex
          flex={
            '0 0 auto'
          }
          height={"3rem"}
          gap={5}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginLeft={5}
          marginRight={5}
        >
          <Group>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/control">Control</Link>
          <Link to="/billings">Billings</Link>
          <Link to="/test">Test</Link>
          </Group>
          
          <Box>Login</Box>
          
        </Flex>
        <Separator></Separator>

        <Box flex={
          '7 0 auto'
        }>
          <Outlet />
        </Box>
        <Separator></Separator>
        <Flex flex={'3 0 auto'} height={"5rem"} alignItems={'center'} justifyContent={'center'}>
          Footer
        </Flex>
      </Stack>

    </React.Fragment>
  );
}
