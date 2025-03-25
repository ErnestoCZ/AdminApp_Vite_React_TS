import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {Provider as ChakraProvider} from '@/components/ui/provider'
import {routeTree} from './routeTree.gen'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'

//TODO create a way to read in dotenv in vite

const port: number = Number(process.env.GRAPHQL_PORT) || 4000;
const path: string = process.env.GRAPHQL_PATH || "/graphql";

const URL = `http://localhost:${port}${path}`
console.log(URL)


const apolloClient = new ApolloClient({uri : URL, cache: new InMemoryCache(), connectToDevTools: true})

const router = createRouter({routeTree, defaultPreload: 'intent'})

declare module '@tanstack/react-router' {
  interface Register{
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        
        <ChakraProvider>
        <RouterProvider router={router} />
        <TanStackRouterDevtools router={router}/>

        </ChakraProvider>
      </ApolloProvider>
    </StrictMode>,
  )
}