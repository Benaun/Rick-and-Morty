export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="my-3 h-0.5 bg-blue-gray-900 w-full" />
    </div>
  )
}