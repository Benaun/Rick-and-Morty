import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import CharacterList from "./components/character-list";
import CharacterForm from "./components/add-character-form";
import CharacterDetails from "./components/character-details";
import NotFound from "./components/not-found";

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='container w-full flex flex-col gap-5'>
        <header className='py-5 flex w-full gap-4 justify-center'>
          <h1 className="text-5xl">Rick and Morty API</h1>
        </header>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        loader: () => redirect('products')
      },
      {
        path: 'products',
        element: <CharacterList />
      },
      {
        path: 'products/:id',
        element: <CharacterDetails />
      },
      {
        path: 'create-product',
        element: <CharacterForm />
      },
    ],
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
])
