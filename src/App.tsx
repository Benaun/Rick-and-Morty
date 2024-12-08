import { Navigate, Route, Routes } from "react-router-dom";
import CharacterList from "./components/character-list";
import CharacterForm from "./components/add-character-form";
import CharacterDetails from "./components/character-details";
import NotFound from "./components/not-found";
import Layout from "./components/layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="products" replace />} />
        <Route path="products" element={<CharacterList />} />
        <Route path="products/:id" element={<CharacterDetails />} />
        <Route path="create-product" element={<CharacterForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

