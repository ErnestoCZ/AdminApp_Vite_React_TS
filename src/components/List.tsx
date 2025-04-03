import { Flex } from "@chakra-ui/react"

interface ListProps<T> {
    items: T[],
    render: (item: T) => React.ReactNode
} 


export const List = <T,> ({items,render} : ListProps<T>) => {
  return (
    <Flex direction={'column'} width={'100%'} height={'100%'} gap={2} overflowY={'scroll'} scrollbar={'hidden'}>
    {items.map(element => (render(element)))}
    </Flex>
  )
}
