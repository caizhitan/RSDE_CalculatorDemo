import { ReactNode } from "react";
import "./css/CalModal.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  imgSrc?: string; 
}

const Cal2Modal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <div className="grid justify-items-center">
              <br/>
              <p className="text-2xl text-ModalText">
                <b>How to use?</b>
              </p>
              <p className="text-black text-center font-serif font-semibold mx-10">
                Over Turning Calculator Guide
              </p>
              <br/>
              {props.imgSrc && (
               <img 
                src={props.imgSrc} 
                alt="Cal2 Instruction" 
                className="modal-photo-2"/>)} 
              <br/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cal2Modal;