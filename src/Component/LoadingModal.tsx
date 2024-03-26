import { ReactNode } from "react";
import "./css/Modal.css";
const Loading = require("../Images/CircleLoading.gif");

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  filepath?: string | undefined;
}

const LoadingModal = (props: ModalType) => {

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <img src={Loading} alt="Loading" />
            <span className=" text-center font-semibold p-2">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default LoadingModal;