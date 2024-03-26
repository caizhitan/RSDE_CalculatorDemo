// CalModal.tsx
import { ReactNode } from "react";
import "./css/CalModal.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  imgSrc?: string;
}

const CalModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <div className="grid justify-items-center">
              <p className="text-2xl text-ModalText">
                <b>How to use?</b>
              </p>
              <p className="text-black text-center font-serif font-semibold mx-10 pt-2">
                End Throw Calculator Guide
              </p>
              {props.imgSrc && (
                <img
                  src={props.imgSrc}
                  alt="Cal1 Instruction"
                  className="modal-photo-cal1"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalModal;
