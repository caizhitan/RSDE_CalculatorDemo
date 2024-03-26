import { ReactNode } from "react";
import "./css/Modal.css";
import ButtonBlue from "./ButtonBlue";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  filepath?: string | undefined;
}

const Modal = (props: ModalType) => {
  const handleClick = () =>{
    props.toggle();
  }

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <div className="grid justify-items-center">
              <br/>
              <p className="text-xl text-ModalText"><b>Open and View File?</b></p>
              <br/>
              <br/>
              <p className="text-black text-center font-serif font-semibold mx-10">Do you want to open up and view the file?</p>
              <br/>
              <br/>
              <ButtonBlue text="Open File" width="w-11/12" route= {props.filepath} />
              <br/>
              <button onClick={handleClick} className={"w-11/12 bg-white text-WhiteButtonText border-BlueButtonBG h-12 px-6 font-bold py-2 rounded-md border-2"}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;