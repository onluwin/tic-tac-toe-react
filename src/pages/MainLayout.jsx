import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Game } from "../components/Game";
import { SelectGameMode } from "../components/SelectGameMode";

export function MainLayout({ children }) {
  const location = useLocation(); // Получаем текущий путь внутри BrowserRouter

  return (
    // <main>{children}</main>
    <>
      {location.pathname === "/" && (
        <>
          <Game />
          {/* <SelectGameMode /> */}
        </>
      )}

      {/* <Outlet /> */}
    </>
  );
}
