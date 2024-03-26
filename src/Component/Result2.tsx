interface result2 {
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
    error: boolean;
}

const Result2 = (props:result2) => {
    let sideload = Math.round((Number(props.TotalVehicleMass) / 2) * Number(props.Gravity)) ;
    let dQ = Math.round(Number(props.WheelUnloading) * sideload/100);
    let Fwind = Math.round(Number(props.WheelCentreLateralSpacing) / Number(props.CenterofPressureARL) * dQ);
    let area = Math.round(Number(props.WindExposedBodySideLength) * Number(props.WindExposedBodySideHeight));
    let pressure = Math.round(Fwind / (Number(props.WindExposedBodySideLength) * Number(props.WindExposedBodySideHeight)) );
    let velocity = Math.round(Math.sqrt(2 * pressure * Number(props.AerodynamicFactor) / Number(props.Density)));
    let result = Math.round(Math.sqrt(2 * (Fwind / (Number(props.WindExposedBodySideLength) * Number(props.WindExposedBodySideHeight)) ) * Number(props.AerodynamicFactor) / Number(props.Density)) * 3.6) ;


    if(props.error === false){
        
        console.log(props.TotalVehicleMass)
        console.log(props.WheelUnloading)
        console.log(props.WheelCentreLateralSpacing)
        console.log(props.WindExposedBodySideLength)
    return(
            //console.log(props.TotalVehicleMass)
            <div className="flex flex-col items-start pb-5 pl-5 w-full bg-white rounded-xl mb-5">
            <h3 className="text-left text-BlueHeader font-extrabold pt-5 text-xl">Calulation Results</h3>
            <div className="pt-3 pb-5 flex flex-col w-full">
                <div className="flex flex-row pr-16">
                    <h5 className="text-left text-GreyText font-bold">Sideload:</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{sideload}</h5>
                </div>
                <div className="flex flex-row">
                    <h5 className="text-GreyText font-bold">Required Wheel Unloading Reaction:</h5>
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="flex-grow text-end text-GreenText font-bold">{dQ}</h5> 
                </div>
                <div className="flex flex-row">
                    <h5 className="text-GreyText font-bold">Required Wind Overturning Force:</h5>
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="flex-grow text-end text-GreenText font-bold">{Fwind}</h5> 
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="text-GreyText font-bold">Area:</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{area}</h5> 
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="text-GreyText font-bold">Pressure:</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{pressure}</h5> 
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="text-GreyText font-bold">Velocity:</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{velocity}</h5> 
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="text-GreyText font-bold">Result:</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{result}</h5> 
                </div>
            </div>
        </div>
        )
    }

    return(
        <div className="flex flex-col items-start pb-5 pl-5 w-full bg-white rounded-xl mb-5 ">
            <h3 className="text-left text-BlueHeader font-extrabold pt-5 text-xl">Calulation Results</h3>
            <h6 className="text-left text-Red text-base font-bold">Oops, unable to calculate - please re-enter the correct values in the fields.</h6>
        </div>
    )
}

export default Result2;