
interface ListProps<T> {
    items: T[],
    render: (item: T) => React.ReactNode
} 


export const List = <T,> ({items,render} : ListProps<T>) => {
  return (
    <>
    {items.map(element => (render(element)))}
    </>
  )
}
