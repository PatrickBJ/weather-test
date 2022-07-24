import Modal from "react-modal";
import styled from "styled-components";

export const ModalContainer = styled(Modal)`
  position: absolute;
  width: 400px;
  height: 300px;
  padding: 10px;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 3fr 1fr;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  border-radius: 13px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
  color: ${({ theme }) => theme.text};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const Buttons = styled.section`
  display: flex;
  gap: 15px;
  align-self: "center";
  justify-content: center;
`;

export const Footer = styled.footer`
  justify-self: end;
  margin-right: 10px;
`;
