interface ButtonProps {
    text: String;
    onClick?: () => void; // Add optional onClick handler
}

const ButtonLogin = (props: ButtonProps) => {

    const handleClick = () => {
      if (props.onClick) {
        props.onClick(); 
      }

    }
    return(
      <button onClick={handleClick} className={"border-white text-white h-12 w-4/6 font-black text-2xl tracking-wider rounded-full border-4 "}>
        {props.text}
      </button>
    )
}

export default ButtonLogin;
