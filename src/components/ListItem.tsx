import { Box } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

export const ListItem: FC<PropsWithChildren> = ({children}) => {
  return (
    <Box p={4} backgroundColor={'grey'} borderRadius={'4xl'} >
      {children}
    </Box>
  )
}
