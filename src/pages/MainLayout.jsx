import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./Home";

export function MainLayout() {
  const location = useLocation(); // Получаем текущий путь внутри BrowserRouter

  return (
    <>
      {/* Отображаем Home только если находимся на главной странице */}
      {location.pathname === "/" && <Home />}
      <Outlet /> {/* Рендерим вложенные маршруты */}
    </>
  );
}
