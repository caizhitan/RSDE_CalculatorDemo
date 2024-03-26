interface refresh{
    reset: (value: boolean) => void;
}

const ClearButton = (props:refresh) => {

    const refresh = () =>{
        props.reset(false);
        console.log("clear form")
    }
    return(
        <div className='bg-BlueBG text-BlueHeader p-3 rounded-xl font-bold h-fulls w-full flex-auto ml-2'>
            <button onClick={refresh} className="w-full h-full items-center justify-center">
                Clear Form
            </button>
        </div>
    )
}

export default ClearButton;