import { HomeContainerStyled } from "../../../styles/categories-style/home-style/home-container.styled";
import HomeRecommended from "./home-recommended";
import HomeSearchField from "./home-search";
import HomeTrending from "./home-trending";

function HomeCategory() {
  return (
    <HomeContainerStyled>
      <HomeSearchField />
      <HomeTrending />
      <HomeRecommended />
    </HomeContainerStyled>
  );
}

export default HomeCategory;
