import React, { useState, useEffect } from "react";
import Cal2Box from "../Component/Cal2Box";
import Menu from "../Component/Menu";
import Result2 from "../Component/Result2";
import ExampleButton from "../Component/ExampleButton";
import ClearButton from "../Component/ClearButton";
import Cal2Modal from "../Component/Cal2Modal"

function Calculator2() {
  const [TotalVehicleMass, setTotalVehicleMass] = useState<number | undefined>(0);
  const [WindExposedBodySideHeight, setWindExposedBodySideHeight] = useState<number | undefined>(0);
  const [WindExposedBodySideLength, setWindExposedBodySideLength] = useState<number | undefined>(0);
  const [BottomClearance, setBottomClearance] = useState<number | undefined>(0);
  const [RoofHeight, setRoofHeight] = useState<number | undefined>(0);
  const [CenterofPressureARL, setCenterofPressureARL] = useState<number | undefined>(0);
  const [WheelCentreLateralSpacing, setWheelCentreLateralSpacing] = useState<number | undefined>(0);
  const [WheelUnloading, setWheelUnloading] = useState<number | undefined>(0);
  const [Gravity, setGravity] = useState<number | undefined>(9.8);
  const [Density, setDensity] = useState<number | undefined>(1.194);
  const [AerodynamicFactor, setAerodynamicFactor] = useState<number | undefined>(1);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  // const [showImage, setShowImage] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formSubmitError ,setFormSubmitError] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);

  useEffect(() => { //This is for the auto calculate textfields
    if (RoofHeight !== undefined && BottomClearance !== undefined) {
      const newWindExposedBodySideHeight = RoofHeight - BottomClearance;
      setWindExposedBodySideHeight(newWindExposedBodySideHeight);
      const newCenterofPressureARL = (RoofHeight - BottomClearance) / 2 + BottomClearance;
      setCenterofPressureARL(newCenterofPressureARL);
    }
  }, [RoofHeight, BottomClearance]);

  const resetFields = () => {
    setTotalVehicleMass(0);
    setWindExposedBodySideHeight(0);
    setWindExposedBodySideLength(0);
    setBottomClearance(0);
    setRoofHeight(0);
    setCenterofPressureARL(0);
    setWheelCentreLateralSpacing(0);
    setWheelUnloading(0);
    setGravity(9.8);
    setDensity(1.194);
    setAerodynamicFactor(1);
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
    if(buttonPressed === true){
        return(
            <div className="items-center">
            <Menu text="RS Centre End Throw Calculator"/>
            <div className="pt-5 p-5 items-center bg-GreyBG">
                <Result2 
                    TotalVehicleMass={TotalVehicleMass}
                    WindExposedBodySideHeight={WindExposedBodySideHeight}
                    WindExposedBodySideLength={WindExposedBodySideLength}
                    BottomClearance={BottomClearance}
                    RoofHeight={RoofHeight}
                    CenterofPressureARL={CenterofPressureARL}
                    WheelCentreLateralSpacing={WheelCentreLateralSpacing}
                    WheelUnloading={WheelUnloading}
                    Gravity={Gravity}
                    Density={Density}
                    AerodynamicFactor={AerodynamicFactor}
                    error={formSubmitError}  
                />
                <div className="flex flex-row item-center w-full pb-5 pr-5 pl-5 bg-GreyBG">
                    <ExampleButton onClick={() => setShowModal(true)}/>
                    <ClearButton reset={resetFields}/>
                </div>
                <Cal2Box
                    clear={clear} 
                    TotalVehicleMass={TotalVehicleMass}
                    WindExposedBodySideHeight={WindExposedBodySideHeight}
                    WindExposedBodySideLength={WindExposedBodySideLength}
                    BottomClearance={BottomClearance}
                    RoofHeight={RoofHeight}
                    CenterofPressureARL={CenterofPressureARL}
                    WheelCentreLateralSpacing={WheelCentreLateralSpacing}
                    WheelUnloading={WheelUnloading}
                    Gravity={Gravity}
                    Density={Density}
                    AerodynamicFactor={AerodynamicFactor}
                    buttonPressed={buttonPressed}
                    setTotalVehicleMass={setTotalVehicleMass}
                    setWindExposedBodySideHeight={setWindExposedBodySideHeight}
                    setWindExposedBodySideLength={setWindExposedBodySideLength}
                    setBottomClearance={setBottomClearance}
                    setRoofHeight={setRoofHeight}
                    setCenterofPressureARL={setCenterofPressureARL}
                    setWheelCentreLateralSpacing={setWheelCentreLateralSpacing}
                    setWheelUnloading={setWheelUnloading}
                    setGravity={setGravity}
                    setDensity={setDensity}
                    setAerodynamicFactor={setAerodynamicFactor}
                    setButtonPressed={setButtonPressed}
                    setFormSubmitError={setFormSubmitError} 
                    />  
            </div>
            {showModal && (
                <Cal2Modal isOpen={showModal} toggle={() => setShowModal(false)} imgSrc="./OverTurning.png">
                </Cal2Modal>
            )}
        </div>
        )
    }
    else{
        return(
            <div className="items-cente">
            <Menu text="RS Centre Over Turning Calculator"/>
            <div className="flex flex-row item-end justify-end w-full pt-5 pr-10 pl-10 bg-GreyBG">
                    <ExampleButton onClick={() => setShowModal(true)} />
                    <ClearButton reset={resetFields}/>
                </div>
            <div className="pt-5 p-5 items-center bg-GreyBG">
                <Cal2Box
                    clear={clear} 
                    TotalVehicleMass={TotalVehicleMass}
                    WindExposedBodySideHeight={WindExposedBodySideHeight}
                    WindExposedBodySideLength={WindExposedBodySideLength}
                    BottomClearance={BottomClearance}
                    RoofHeight={RoofHeight}
                    CenterofPressureARL={CenterofPressureARL}
                    WheelCentreLateralSpacing={WheelCentreLateralSpacing}
                    WheelUnloading={WheelUnloading}
                    Gravity={Gravity}
                    Density={Density}
                    AerodynamicFactor={AerodynamicFactor}
                    buttonPressed = {buttonPressed} 
                    setTotalVehicleMass={setTotalVehicleMass}
                    setWindExposedBodySideHeight={setWindExposedBodySideHeight}
                    setWindExposedBodySideLength={setWindExposedBodySideLength}
                    setBottomClearance={setBottomClearance}
                    setRoofHeight={setRoofHeight}
                    setCenterofPressureARL={setCenterofPressureARL}
                    setWheelCentreLateralSpacing={setWheelCentreLateralSpacing}
                    setWheelUnloading={setWheelUnloading}
                    setGravity={setGravity}
                    setDensity={setDensity}
                    setAerodynamicFactor={setAerodynamicFactor}
                    setButtonPressed = {setButtonPressed} 
                    setFormSubmitError={setFormSubmitError} 
                    />
            </div>
            {showModal && (
                <Cal2Modal isOpen={showModal} toggle={() => setShowModal(false)} imgSrc="./OverTurning.png">
                </Cal2Modal>
          )}
        </div>
        )
    }
  }


  return renderAuthenticatedContent()

}

export default Calculator2;
