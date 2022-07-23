import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-width: 300px;
  min-height: 500px;
`;

export const InfoContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 200px;
`;
