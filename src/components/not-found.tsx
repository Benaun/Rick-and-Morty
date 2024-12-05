import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container h-screen">
      <h2 className="text-4xl font-bold mb-4">404 - Страница не найдена</h2>
      <p className="mb-6">К сожалению, запрашиваемая вами страница не существует.</p>
      <Link to="/products" className="text-blue-500 underline">
        Вернуться на главную страницу
      </Link>
    </div>
  );
}