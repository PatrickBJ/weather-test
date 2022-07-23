import { ReactComponent as CloseIcon } from "assets/close-circle.svg";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-self: end;
  justify-items: center;
  align-items: center;
  gap: 10px;
`;

export const SearchCity = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: -1px;
    right: 3px;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  text-indent: 5px;
  transition: all 1s;
  transition-timing-function: ease;
`;

export const CloseButton = styled(CloseIcon).attrs({ className: "clickable" })`
  width: 14px;
  filter: ${({ theme }) => theme.filter};
  padding: 0;
  margin: 0;
`;

export const SearchText = styled.p``;
