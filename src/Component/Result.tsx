interface result {
    bogie: number | undefined;
    vehicleLength: number | undefined;
    curvedRadius: number | undefined;
    error: boolean;
}

const Result = (props:result) => {
    let CT = (Number(props.curvedRadius) - Math.sqrt(Math.pow(Number(props.curvedRadius), 2) - Math.pow((Number(props.bogie)/2),2)))*1000
    CT = +CT.toFixed(3)
    let ET = (Number(props.curvedRadius) - Math.sqrt(Math.pow(Number(props.curvedRadius), 2) - Math.pow((Number(props.vehicleLength)/2),2)))*1000 - CT
    ET = +ET.toFixed(3)
    let CTc = Math.pow(Number(props.bogie), 2)/(8*Number(props.curvedRadius))*1000
    CTc = +CTc.toFixed(3)
    let ETc = (Math.pow(Number(props.vehicleLength),2 ) - Math.pow((Number(props.bogie)),2))/(8*Number(props.curvedRadius))*1000
    ETc = +ETc.toFixed(3)


    if(props.error === false){
        return(
            <div className="flex flex-col items-start pb-5 pl-5 w-full bg-white rounded-xl mb-5">
            <h3 className="text-left text-BlueHeader font-extrabold pt-5 text-xl">Calulation Results</h3>
            <div className="pt-3 pb-5 flex flex-col w-full">
                <div className="flex flex-row pr-16">
                    <h5 className="text-left text-GreyText font-bold">Centre Throw(CTc):</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{CT}</h5>
                </div>
                <div className="flex flex-row pr-16">
                    <h5 className="text-GreyText font-bold">End Throw(ET):</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{ET}</h5> 
                </div>
            </div>
            <h3 className="text-left text-BlueHeader font-extrabold text-xl">Calculation using LTA Formula</h3>
            <div className="pt-3 pd-5 flex flex-col w-full">
                <div className="flex flex-row pr-16">
                    <h5 className="text-left text-GreyText font-bold">Centre Throw(CTc):</h5>
                    <h5 className="flex-grow text-end text-GreenText font-bold">{CTc}</h5>
                </div>
                <div className="flex flex-row pr-16">
                <h5 className="text-GreyText font-bold">End Throw(ETc):</h5>
                <h5 className="flex-grow text-end text-GreenText font-bold">{ETc}</h5>
                </div>
            </div>
        </div>
        )
    }

    return(
        <div className="flex flex-col items-start pb-5 pl-5 w-full bg-white rounded-xl mb-5">
            <h3 className="text-left text-BlueHeader font-extrabold pt-5 text-xl">Calulation Results</h3>
            <h6 className="text-left text-Red text-base font-bold">Oops, unable to calculate - please re-enter the correct values in the fields.</h6>
        </div>
    )
}

export default Result;