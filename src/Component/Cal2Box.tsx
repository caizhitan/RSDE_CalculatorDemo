import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Card from '@mui/material/Card';
import CalculateButton from "./CalculateButton";

interface cal2Value {
    TotalVehicleMass: number | undefined;
    WindExposedBodySideHeight: number | undefined;
    WindExposedBodySideLength: number | undefined;
    BottomClearance: number | undefined;
    RoofHeight: number | undefined;
    CenterofPressureARL: number | undefined;
    WheelCentreLateralSpacing: number | undefined;
    WheelUnloading: number | undefined;
    Gravity: number | undefined;
    Density: number | undefined;
    AerodynamicFactor: number | undefined;
    buttonPressed: boolean;
    clear: boolean;

    setTotalVehicleMass: (value: number | undefined) => void;
    setWindExposedBodySideHeight: (value: number | undefined) => void;
    setWindExposedBodySideLength: (value: number | undefined) => void;
    setBottomClearance: (value: number | undefined) => void;
    setRoofHeight: (value: number | undefined) => void;
    setCenterofPressureARL: (value: number | undefined) => void;
    setWheelCentreLateralSpacing: (value: number | undefined) => void;
    setWheelUnloading: (value: number | undefined) => void;
    setGravity: (value: number | undefined) => void;
    setDensity: (value: number | undefined) => void;
    setAerodynamicFactor: (value: number | undefined) => void;
    setButtonPressed: (value: boolean) => void;
    setFormSubmitError: (value: boolean) => void;
}

const Cal2Box = (props:cal2Value) => {

    const [TotalVehicleMass, setTotalVehicleMass] = useState<number | undefined>();
    const [WindExposedBodySideHeight, setWindExposedBodySideHeight] = useState<number | undefined>();
    const [WindExposedBodySideLength, setWindExposedBodySideLength] = useState<number | undefined>();
    const [BottomClearance, setBottomClearance] = useState<number | undefined>();
    const [RoofHeight, setRoofHeight] = useState<number | undefined>();
    const [CenterofPressureARL, setCenterofPressureARL] = useState<number | undefined>();
    const [WheelCentreLateralSpacing, setWheelCentreLateralSpacing] = useState<number | undefined>();
    const [WheelUnloading, setWheelUnloading] = useState<number | undefined>();
    const [Gravity, setGravity] = useState<number | undefined>(9.8);
    const [Density, setDensity] = useState<number | undefined>(1.194);
    const [AerodynamicFactor, setAerodynamicFactor] = useState<number | undefined>(1);
    const [buttonValid, setButtonValid] = useState<boolean>(false);

    useEffect(() => {
        if (typeof RoofHeight === 'number' && typeof BottomClearance === 'number') {
            const roofHeight = Number(RoofHeight);
            const bottomClearance = Number(BottomClearance);
    
            const windExposedBodySideHeight = roofHeight - bottomClearance;
            setWindExposedBodySideHeight(Number(windExposedBodySideHeight.toFixed(3)));
    
            const centerOfPressureARL = (roofHeight - bottomClearance) / 2 + bottomClearance;
            setCenterofPressureARL(Number(centerOfPressureARL.toFixed(4)));
        }
    }, [RoofHeight, BottomClearance]);
    
    useEffect(() => { 
        if (props.clear) {
            setTotalVehicleMass(undefined);
            setWindExposedBodySideHeight(undefined);
            setWindExposedBodySideLength(undefined);
            setBottomClearance(undefined);
            setRoofHeight(undefined);
            setCenterofPressureARL(undefined);
            setWheelCentreLateralSpacing(undefined);
            setWheelUnloading(undefined);
            setGravity(9.8);
            setDensity(1.194);
            setAerodynamicFactor(1);
            setButtonValid(false);
        }
    }, [props.clear]);

    // const OnChangeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (
    //         // TotalVehicleMass !== undefined && !isNaN(Number(TotalVehicleMass)) &&
    //         // WindExposedBodySideLength !== undefined && !isNaN(Number(WindExposedBodySideLength)) &&
    //         // BottomClearance !== undefined && !isNaN(Number(BottomClearance)) &&
    //         // RoofHeight !== undefined && !isNaN(Number(RoofHeight)) &&
    //         // WheelCentreLateralSpacing !== undefined && !isNaN(Number(WheelCentreLateralSpacing)) &&
    //         // WheelUnloading !== undefined && !isNaN(Number(WheelUnloading))

    //         isNaN(Number(TotalVehicleMass)) ||
    //         isNaN(Number(WindExposedBodySideLength)) ||
    //         isNaN(Number(BottomClearance)) ||
    //         isNaN(Number(RoofHeight)) ||
    //         isNaN(Number(WheelCentreLateralSpacing)) ||
    //         isNaN(Number(WheelUnloading))
    //     ) {
    //         setButtonValid(false);
    //     } else {
    //         setButtonValid(true);
    //     }
    // }
    useEffect(() => {
        if (
            !isNaN(Number(TotalVehicleMass)) && 
            !isNaN(Number(WindExposedBodySideLength)) && 
            !isNaN(Number(BottomClearance)) && 
            !isNaN(Number(RoofHeight)) && 
            !isNaN(Number(WheelCentreLateralSpacing)) && 
            !isNaN(Number(WheelUnloading)) &&
            Number(TotalVehicleMass) !== 0 && 
            Number(WindExposedBodySideLength) !== 0 && 
            Number(BottomClearance) !== 0 && 
            Number(RoofHeight) !== 0 && 
            Number(WheelCentreLateralSpacing) !== 0 && 
            Number(WheelUnloading) !== 0
        ) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    }, [TotalVehicleMass, WindExposedBodySideLength, BottomClearance, RoofHeight, WheelCentreLateralSpacing, WheelUnloading]);
    
    const CalculateResults = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        props.setTotalVehicleMass(TotalVehicleMass);
        props.setWindExposedBodySideHeight(WindExposedBodySideHeight);
        props.setWindExposedBodySideLength(WindExposedBodySideLength)
        props.setBottomClearance(BottomClearance);
        props.setRoofHeight(RoofHeight);
        props.setCenterofPressureARL(CenterofPressureARL);
        props.setWheelCentreLateralSpacing(WheelCentreLateralSpacing);
        props.setWheelUnloading(WheelUnloading);
        props.setGravity(Gravity);
        props.setDensity(Density);
        props.setAerodynamicFactor(AerodynamicFactor);
        props.setButtonPressed(true);
        setGravity(9.8)
        setDensity(1.194)
        setAerodynamicFactor(1)
    }

    return (
        <Card className="flex flex-col items-center justify-center" sx={{ borderRadius: '16px', cardShadow: 3 }}>
            <form className="flex flex-col gap-5 p-5 w-full" onSubmit={CalculateResults}>
                <FormInput label="Total Vehicle Mass" inputType="number" inputText="kg" value={TotalVehicleMass} onChange={(value: number | undefined) => { setTotalVehicleMass(value) }} />
                <FormInput label="Wind Exposed Body Side Height" inputType="number" inputText="m" value={WindExposedBodySideHeight} onChange={(value: number | undefined) => { setWindExposedBodySideHeight(value) }} isDisabled={true} />
                <FormInput label="Wind Exposed Body Side Length" inputType="number" inputText="m" value={WindExposedBodySideLength} onChange={(value: number | undefined) => { setWindExposedBodySideLength(value) }} />
                <FormInput label="Bottom Clearance" inputType="number" inputText="m" value={BottomClearance} onChange={(value: number | undefined) => { setBottomClearance(value) }} />
                <FormInput label="Roof Height" inputType="number" inputText="m" value={RoofHeight} onChange={(value: number | undefined) => { setRoofHeight(value) }} />
                <FormInput label="Centre Of Pressure A.R.L" inputType="number" inputText="m" value={CenterofPressureARL} onChange={(value: number | undefined) => { setCenterofPressureARL(value) }} isDisabled={true} />
                <FormInput label="Wheel Centre Lateral Spacing" inputType="number" inputText="m" value={WheelCentreLateralSpacing} onChange={(value: number | undefined) => { setWheelCentreLateralSpacing(value) }} />
                <FormInput label="Wheel Unloading" inputType="number" inputText="%" value={WheelUnloading} onChange={(value: number | undefined) => { setWheelUnloading(value) }} />
                <FormInput label="Gravity" inputType="number" inputText="m/s²" value={Gravity} onChange={(value: number | undefined) => { setGravity(value) }} />
                <FormInput label="Density" inputType="number" inputText="kg/m³" value={Density} onChange={(value: number | undefined) => { setDensity(value) }} />
                <FormInput label="Aerodynamic Factor" inputType="number" value={AerodynamicFactor} onChange={(value: number | undefined) => { setAerodynamicFactor(value) }} />

                <div className="flex flex-row">
                <CalculateButton isValid={buttonValid} />
                </div>
            </form>
        </Card>
    )
}

export default Cal2Box;
