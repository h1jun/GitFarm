import styled from "styled-components";
import HomeIcon from "../../assets/icon/nav/home_nav.svg";

export const Container = styled.nav`
  padding: 0 25px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
`;

export const Home = styled(HomeIcon)`
  bottom: 17px;
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
`;

export const Item = styled.li``;