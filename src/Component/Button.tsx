import {
    Link
  } from "react-router-dom";
import * as React from "react";

interface ButtonProps {
    text: String;
    width: String;
    bgColor: String;
    textColor: String;
    route: string;
    date?: Date;
}

const Button= (props: ButtonProps) => {
    return(
        <Link to={props.route}>
                <button className={props.width + ' ' + props.bgColor + ' ' + props.textColor + ' h-12 px-6 font-bold py-2 rounded-md'}>
                {props.text}
                </button>
            </Link>
    )
}
