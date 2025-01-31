import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  const StyledLink = styled(NavLink)`
    display: inline-flex; /* Чтобы ссылка вела себя как кнопка */
    justify-content: center;
    align-items: center;
    font-size: 20px;

    width: 125px;
    height: 75px;

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

    /* PHONE ADAPTATION */

    @media (max-width: 768px) {
      display: flex; /* Кнопки становятся блочными элементами */
      width: 100%; /* Занимают всю ширину родительского контейнера */
      padding: 12px; /* Увеличиваем отступы для удобства на мобильных */
      font-size: 16px; /* Увеличиваем размер шрифта для лучшей читаемости */

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  `;
  return (
    <>
      <nav>
        {/* <StyledLink to="/online">Online</StyledLink> */}

        <StyledLink to="/offline">Offline mode</StyledLink>
      </nav>
    </>
  );
};
