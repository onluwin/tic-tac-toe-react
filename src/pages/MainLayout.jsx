import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Game } from "../components/Game";
import { SelectGameMode } from "../components/SelectGameMode";
import { Modal } from "../components/Modal/Modal";
import { useState } from "react";
import { OpenModalBtn } from "../components/Modal/OpenModalBtn";

export function MainLayout({ children }) {
  const location = useLocation(); // Получаем текущий путь внутри BrowserRouter
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    // <main>{children}</main>
    <>
      {location.pathname === "/" && (
        <>
          <Game />

          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          )}

          <OpenModalBtn
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

          {/* <SelectGameMode /> */}
        </>
      )}

      {/* <Outlet /> */}
    </>
  );
}
