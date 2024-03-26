import * as React from "react";

interface ButtonProps {
    text: String;
    width: String;
    route: string | undefined;
    border?: string;
    borderwidth?: string;
}

const ButtonBlue = (props: ButtonProps) => {
    const handleClick = () => {
        window.open(props.route);
    };

    return(
        <button onClick={handleClick} className={props.width + ' ' + "bg-BlueButtonBG " + "text-white" + props.borderwidth + ' h-12 px-6 font-bold py-2 rounded-md ' + props.border}>
                {props.text}
        </button>
    )
}

export default ButtonBlue;