import { Button } from "@mui/material"

interface CalculateButtonProp {
    isValid: boolean;
}

const CalculateButton = (props:CalculateButtonProp) => {
    if(props.isValid === true){
        return(
            <button className=" bg-BlueHeader text-white h-12 px-6 font-bold py-2 rounded-md w-full">
                Calculate
            </button>
        )
    }
    else{
        return(
            <Button variant="contained" disabled className="h-12 px-6 font-bold py-2 rounded-md w-full">
                Calculate
            </Button>
        )
    }
}

export default CalculateButton;