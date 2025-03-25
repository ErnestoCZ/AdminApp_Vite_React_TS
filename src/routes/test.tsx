import { List } from '@/components/List';
import {Box} from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})


type User = {
  id:number;
  name: string;
}


const  user: User[] = [
  {id:1, name: 'John Doe'},
  {id:2, name: 'Jane Doe'},
  {id:3, name: 'John Smith'},
  {id:4, name: 'Jane Smith'},
  {id:5, name: 'John Brown'},
  {id:6, name: 'Jane Brown'},
  {id:7, name: 'John White'},
  {id:8, name: 'Jane White'},
  
]

function RouteComponent() {
  return (<>
  
    <List<User> items={user} render={(item) => <Box key={item.id}>{item.name}</Box>}/>
  
  
  </>)}
