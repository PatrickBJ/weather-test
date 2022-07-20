import { useState } from "react";
import Clock from "../NavBar/Clock";
import Modal from "react-modal";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  modalOpen,
  closeModal,
  units,
  timeFormat,
  Units,
  TimeFormats,
  saveSettings,
} from "reducers/settingsSlice";
import Button from "components/Buttons/Button";
import SelectButton from "../Buttons/SelectButton";

const ModalContainer = styled(Modal)`
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

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const Buttons = styled.section`
  display: flex;
  gap: 15px;
  align-self: "center";
  justify-content: center;
`;

const Footer = styled.footer`
  justify-self: end;
  margin-right: 10px;
`;

export default function ModalSettings() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalOpen);

  const [unit, setUnit] = useState(useSelector(units));
  const [time, setTime] = useState(useSelector(timeFormat));

  const save = () => {
    dispatch(saveSettings({ unit, time }));
  };

  return (
    <ModalContainer
      isOpen={isModalOpen}
      ariaHideApp={false}
      overlayClassName="overlay"
    >
      <Header>Settings</Header>
      <SelectButton
        selected={unit}
        setSelected={setUnit}
        options={Object.values(Units)}
      >
        Units
      </SelectButton>
      <SelectButton
        selected={time}
        setSelected={setTime}
        options={Object.values(TimeFormats)}
      >
        Time
      </SelectButton>
      <Buttons>
        <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
        <Button onClick={() => save()}>Save</Button>
      </Buttons>
      <Footer>
        <Clock />
      </Footer>
    </ModalContainer>
  );
}
