import styled from "styled-components";
import classNames from "classnames/bind";

interface ButtonProps {
  children: string;
  onClick: () => void;
  selected?: boolean;
  width?: number;
  height?: number;
}

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: ${({ width = 100 }) => width}px;
  height: ${({ height = 20 }) => height}px;
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
  }
`;

export default function Button({
  children,
  onClick,
  selected,
  width,
  height,
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      className={classNames({ selected })}
      width={width}
      height={height}
    >
      {children}
    </ButtonContainer>
  );
}
