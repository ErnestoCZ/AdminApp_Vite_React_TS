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
        <Flex flexGrow={0} height={"5rem"} alignItems={'center'} justifyContent={'center'}>
          <Heading size={'3xl'}>Admin App</Heading>
        </Flex>
        <Separator></Separator>
        
        <Flex
          flexGrow={0}
          flexShrink={"0"}
          height={"3rem"}
          gap={5}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginLeft={5}
        >
          <Group>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/control">Control</Link>
          <Link to="/billings">Billings</Link>
          <Link to="/test">Test</Link>
          </Group>
          
          <Box marginRight={5}> Login</Box>
          
        </Flex>
        <Separator></Separator>

        <Box flexGrow={8}>
          <Outlet />
        </Box>
        <Separator></Separator>
        <Flex flexGrow={0} height={"5rem"} alignItems={'center'} justifyContent={'center'}>
          
        </Flex>
      </Stack>

    </React.Fragment>
  );
}
