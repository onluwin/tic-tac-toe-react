import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SelectGameMode = () => {
  const StyledLink = styled(NavLink)`
    position: absolute;
    width: 100px;
    height: 50px;

    display: inline-flex; /* Чтобы ссылка вела себя как кнопка */
    justify-content: center;
    align-items: center;
    font-size: 20px;

    top: 20px;
    right: 20px;

    padding: 10px 20px; /* Отступы внутри кнопки */
    color: white; /* Цвет текста */
    background-color: #007bff; /* Цвет фона */

    border: none; /* Убираем рамки */
    border-radius: 5px; /* Закругление углов */
    text-decoration: none; /* Убираем подчеркивание */
    cursor: pointer; /* Указываем, что элемент кликабельный */
    transition: background-color 0.3s; /* Плавный переход цвета фона */

    &.active {
      background-color: #0056b3; /* Цвет фона для активного состояния */
    }

    &:hover {
      background-color: #0056b3; /* Цвет фона при наведении */
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover {
    }
    &:not(:last-child) {
    }

    /* PHONE ADAPTATION */

    @media (min-width: 320px) and (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <nav>
      <StyledLink to="/">Back to menu</StyledLink>
    </nav>
  );
};
