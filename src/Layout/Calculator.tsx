// Calculator.js
import React, { useState, useEffect } from "react";
import CalBox from "../Component/CalBox";
import Menu from "../Component/Menu";
import Result from "../Component/Result";
import ExampleButton from "../Component/ExampleButton";
import ClearButton from "../Component/ClearButton";
import CalModal from "../Component/CalModal";
import { useIsAuthenticated } from "@azure/msal-react";
import Login from "./Login";

function Calculator() {
  const [rBogie, setRBogie] = useState<number | undefined>(0);
  const [rVehicleLength, setRVehicleLength] = useState<number | undefined>(0);
  const [rCurveRadius, setRCurveRadius] = useState<number | undefined>(0);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formSubmitError, setFormSubmitError] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);
  const isAuthenticated = useIsAuthenticated();

  const resetFields = () => {
    setRBogie(0);
    setRVehicleLength(0);
    setRCurveRadius(0);
    setClear(true);
    setButtonPressed(false);
  };

  useEffect(() => {
    if (clear) {
      resetFields();
      setClear(false)
    }
  }, [clear]);

  const renderAuthenticatedContent = () => {
    if (buttonPressed === true) {
      return (
        <div className="items-center">
          <Menu text="RS Centre End Throw Calculator"/>
          <div className="pt-5 p-5 items-center bg-GreyBG">
            <Result bogie={rBogie} vehicleLength={rVehicleLength} curvedRadius={rCurveRadius} error={formSubmitError} />
            <div className="flex flex-row justify-center items-center w-full pb-5 pr-5 pl-5 bg-GreyBG">
              <ExampleButton onClick={() => setShowModal(true)} />
              <ClearButton reset={resetFields} />
            </div>
            <CalBox
              clear={clear} 
              bogie={rBogie} 
              vehicleLength={rVehicleLength} 
              curvedRadius={rCurveRadius} 
              setBogie={setRBogie} 
              setVehicleLength={setRVehicleLength} 
              setCurvedRadius={setRCurveRadius} 
              buttonPressed = {buttonPressed} 
              setButtonPressed = {setButtonPressed} 
              setFormSubmitError={setFormSubmitError}/>
          </div>
          {showModal && (
            <CalModal isOpen={showModal} toggle={() => setShowModal(false)} imgSrc="./EndThrow.png">
            </CalModal>
          )}
        </div>
      );
    }
    else {
      return(
        <div className="items-center">
        <Menu text="RS Centre End Throw Calculator"/>
        <div className="flex flex-row justify-center items-center w-full pt-5 pr-10 pl-10 bg-GreyBG">
          <ExampleButton onClick={() => setShowModal(true)} />
          <ClearButton reset={resetFields} />
        </div>
        <div className="pt-5 p-5 items-center bg-GreyBG">
          <CalBox
              clear={clear}
              bogie={rBogie}
              vehicleLength={rVehicleLength}
              curvedRadius={rCurveRadius}
              setBogie={setRBogie}
              setVehicleLength={setRVehicleLength}
              setCurvedRadius={setRCurveRadius}
              buttonPressed={buttonPressed}
              setButtonPressed={setButtonPressed}
              setFormSubmitError={setFormSubmitError}
          />
        </div>
        {showModal && (
          <CalModal isOpen={showModal} toggle={() => setShowModal(false)} imgSrc="./EndThrow.png">
          </CalModal>
        )}
      </div>
      )
    }
  }

  return renderAuthenticatedContent()
}

export default Calculator;
