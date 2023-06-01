import { SideBarStyled } from "../../styles/main-page-styles/side-bar.styled";
import Logo from "../logo";
import SideBarCategory from "./side-bar-category";
import UserLogo from "./user-logo";

function MainPageSideBar() {
  return (
    <SideBarStyled>
      <Logo />

      <SideBarCategory />

      <UserLogo />
    </SideBarStyled>
  );
}

export default MainPageSideBar;
