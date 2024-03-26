import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    text: String;
    width: String;
    route: any;
    border?: string;
    borderwidth?: string;
    onClick?: () => void; // Add optional onClick handler
}

const ButtonWhite = (props: ButtonProps) => {
    let navigate = useNavigate();

    const handleClick = () => {
      if (props.onClick) {
        props.onClick(); 
      }

      navigate(props.route); 
    }

    return(
      <button onClick={handleClick} className={props.width + " bg-white " + "text-WhiteButtonText " + props.border + ' h-12 px-6 font-bold py-2 rounded-md ' + props.borderwidth}>
        {props.text}
      </button>
    )
}

export default ButtonWhite;
