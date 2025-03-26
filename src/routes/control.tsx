import { Box, Input, Stack } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { UserInputForm } from '@/components/UserInputForm'
import { List } from '@/components/List'
import { User } from '@/types'
import { fakeUser } from '@/fakeData'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/control')({
  component: RouteComponent,
})

const renderUser = (item: User) => {
  return (
    <Box key={item.id} p={4} backgroundColor={'grey'} borderRadius={'4xl'} >
      {item.firstName}
    </Box>
  )
}

function RouteComponent() {
  const [suggestion, setSuggestion] = useState<string>("");
  const [filteredUser, setFilteredUser] = useState<User[]>(fakeUser);

  useEffect(() => {
    const newArray = fakeUser.filter(element => element.firstName.toLowerCase().includes(suggestion.toLowerCase()))
    setFilteredUser(newArray)
  }, [suggestion])

  return (

    <Stack direction={'row'} width={'100%'} height={'100%'}>

      <Stack direction={'column'} flex={'1 1 auto'} padding={2} minWidth={'30%'}>
        UserInputForm
        <UserInputForm/>
      </Stack>

      <Stack direction={'column'} flex={'2 1 auto'} padding={2} minWidth={'50%'}>
        UserList

        <Input type='text' value={suggestion} onChange={(e) => setSuggestion(e.target.value)} placeholder='Search'/>
        <List<User> items={filteredUser} render={renderUser} />

      </Stack>

    </Stack>

  )
}
