import styled from "styled-components";

export const HomeSearchStyled = styled.div`
  padding-right: 36px;
  display: flex;
  align-items: flex-start;
  gap: 24px;

  input {
    width: 100%;
    padding-bottom: 11px;

    font-family: inherit;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    caret-color: #fc4747;
    background: transparent;
    color: rgba(255, 255, 255, 0.5);
  }

  input:focus {
    border-bottom: 1px solid #5a698f;
    color: white;
  }
`;
