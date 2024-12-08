import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className='container w-full flex flex-col gap-5'>
      <header className='py-5 flex w-full gap-4 justify-center'>
        <h1 className="text-5xl">Rick and Morty API</h1>
      </header>
      <Outlet />
    </div>
  )
}