import FormInput from "./FormInput";
import Card from '@mui/material/Card';
import { useEffect, useState } from "react";
import CalculateButton from "./CalculateButton";

interface calValue{
    bogie: number | undefined;
    vehicleLength: number | undefined;
    curvedRadius: number | undefined;
    buttonPressed: boolean;
    clear: boolean;

    setBogie: (value: number | undefined) => void;
    setVehicleLength: (value: number | undefined) => void;
    setCurvedRadius: (value: number | undefined) => void;
    setButtonPressed: (value: boolean) => void;
    setFormSubmitError: (value: boolean) => void;
}

const CalBox = (props:calValue) => {

    const [bogie, setBogie] = useState<number | undefined>();
    const [vehicleLength, setVehicleLength] = useState<number | undefined>();
    const [curveRadius, setCurveRadius] = useState<number | undefined>();
    const [buttonValid, setButtonValid ] = useState<boolean>(false);
    
    useEffect(() => {
        if (props.clear) {
            setBogie(undefined);
            setVehicleLength(undefined);
            setCurveRadius(undefined);
            setButtonValid(false);
        }
    }, [props.clear]);

    useEffect(() => {
        if (!isNaN(Number(bogie)) && !isNaN(Number(vehicleLength)) && !isNaN(Number(curveRadius)) && Number(bogie) !== 0 && Number(vehicleLength) !== 0 && Number(curveRadius) !== 0) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    }, [bogie, vehicleLength, curveRadius]);

    const CalculateResults = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        props.setBogie(bogie);
        props.setVehicleLength(vehicleLength);
        props.setCurvedRadius(curveRadius);
        props.setButtonPressed(true);
    }

    return(
        <Card className="flex flex-col items-center justify-center bg-white" sx={{ borderRadius: '16px', cardShadow: 3}}>
            <form className="flex flex-col gap-5 p-5 w-full" onSubmit={CalculateResults}>
                <FormInput label="Bogie Centre Distance (B):" inputType="number" inputText="m" value={bogie} onChange={(value:number|undefined)=>{setBogie(value)}} />              
                <FormInput label="Overall Vehicle Length (T):" inputType="number" inputText="m" value={vehicleLength} onChange={(value:number|undefined)=>{setVehicleLength(value)}}/>                
                <FormInput label="Curve Radius (R):" inputType="number" inputText="m" value={curveRadius} onChange={(value:number|undefined)=>{setCurveRadius(value)}}/>
                
                <div className="flex flex-row">
                <CalculateButton isValid={buttonValid} />
                </div>
            </form>
        </Card>
    )
}

export default CalBox;

