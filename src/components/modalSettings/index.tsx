import { useState } from "react";
import Clock from "../Clock";
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
import toast from "react-hot-toast";
import { useLocation } from "react-router";
import { selectedCity } from "reducers/citiesSlice";
import { weatherApi } from "api/weather";
import { ModalContainer, Header, Buttons, Footer } from "./ModalSettings.style";

export default function ModalSettings() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalOpen);
  const cityItem = useSelector(selectedCity);
  const location = useLocation();

  const [unit, setUnit] = useState(useSelector(units));
  const [time, setTime] = useState(useSelector(timeFormat));

  const handleCloseClick = () => dispatch(closeModal());

  const handleSaveClick = async () => {
    dispatch(saveSettings({ unit, time }));
    toast.success("Settings saved");
    weatherApi(cityItem, location, unit, dispatch);
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
        <Button onClick={handleCloseClick}>Cancel</Button>
        <Button onClick={handleSaveClick}>Save</Button>
      </Buttons>
      <Footer>
        <Clock />
      </Footer>
    </ModalContainer>
  );
}
