import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SelectGameMode = () => {
  const StyledLink = styled(NavLink)`
    &:hover {
    }
    &:not(:last-child) {
    }

    /* PHONE ADAPTATION */

    @media (max-width: 768px) {
      &:not(:last-child) {
      }
    }
  `;
  return (
    <nav>
      <StyledLink to="/">Back to menu</StyledLink>
    </nav>
  );
};
