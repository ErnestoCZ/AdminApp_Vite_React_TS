import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/billings"!</div>
}
