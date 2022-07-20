import styled from "styled-components";
import classNames from "classnames/bind";

interface ButtonProps {
  children: string;
  onClick: () => void;
  selected?: boolean;
}

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100px;
  height: 20px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  cursor: pointer;
  transform: scale(1);
  transition-timing-function: ease;
  transition-duration: 1s;
  :hover,
  &.active,
  &.selected {
    border: none;
    background-color: ${({ theme }) => theme.hoverBody};
    color: ${({ theme }) => theme.hoverText};
    transform: scale(0.95);
  }
`;

export default function Button({ children, onClick, selected }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} className={classNames({ selected })}>
      {children}
    </ButtonContainer>
  );
}
