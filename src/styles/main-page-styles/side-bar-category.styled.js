import styled from "styled-components";

export const SideBarCategoryStyled = styled.div`
  margin-top: 75px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  .category--icon:hover {
    fill: #fc4747;
  }

  .active-category {
    fill: #ffffff !important;
  }
`;
