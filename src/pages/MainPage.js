import styled from "styled-components";
import { GlobalStyled } from "../styles/global";
import MainPageSideBar from "../components/main-page/side-bar";
import HomeCategory from "../components/categories/home/category-home";

const MainPageContainerStyled = styled.div`
  padding-left: 32px;
  padding-top: 32px;
  display: flex;
  gap: 36px;
`;

function MainPage() {
  return (
    <>
      <GlobalStyled />
      <MainPageContainerStyled>
        <MainPageSideBar />

        <HomeCategory />
      </MainPageContainerStyled>
    </>
  );
}

export default MainPage;
