import Button from "./Button";
import styled from "styled-components";

interface ButtonProps {
  children: string;
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SelectButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  text-align: center;
`;

const Buttons = styled.section`
  display: flex;
  gap: 15px;
  align-self: "center";
  justify-content: center;
`;

export default function SelectButton({
  children,
  options,
  selected,
  setSelected,
}: ButtonProps) {
  return (
    <SelectButtonContainer>
      <Label htmlFor="buttons">{children}</Label>
      <Buttons id="buttons">
        {options.map((item, index) => (
          <Button
            key={index}
            onClick={() => setSelected(item)}
            selected={selected === item}
          >
            {item}
          </Button>
        ))}
      </Buttons>
    </SelectButtonContainer>
  );
}
