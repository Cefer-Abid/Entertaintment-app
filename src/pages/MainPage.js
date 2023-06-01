import styled from "styled-components";
import { GlobalStyled } from "../styles/global";
import MainPageSideBar from "../components/main-page/side-bar";

const MainPageContainerStyled = styled.div`
  padding-left: 32px;
  padding-top: 32px;
  display: flex;
  gap: 36px;
`;
const MainPageContentStyled = styled.div`
  //   margin: 50px 0;
  height: 100%;
`;

function MainPage() {
  return (
    <>
      <GlobalStyled />
      <MainPageContainerStyled>
        <MainPageSideBar />

        <MainPageContentStyled>
          <span>Content</span>
        </MainPageContentStyled>
      </MainPageContainerStyled>
    </>
  );
}

export default MainPage;
