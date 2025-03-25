import { Stack } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { UserInputForm } from '@/components/UserInputForm'

export const Route = createFileRoute('/control')({
  component: RouteComponent,
})


function RouteComponent() {


  return (

    <Stack direction={'row'} width={'100%'} height={'100%'}>

      <Stack direction={'column'} flex={'1 1 auto'} padding={2} minWidth={'30%'}>
        UserInputForm
        <UserInputForm/>
      </Stack>

      <Stack direction={'column'} flex={'2 1 auto'} padding={2} minWidth={'50%'}>
        UserList

      </Stack>

    </Stack>

  )
}
