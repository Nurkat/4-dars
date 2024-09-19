import React, { useState } from "react";

function Modal({ children, isOpenModal, setIsmodal }) {
  return (
    <div
      onClick={(e) =>
        e.target.id == "wrapper" ? setIsmodal(false) : setIsmodal(true)
      }
      id="wrapper"
      className={`${
        isOpenModal ? "scale-100" : "scale-0"
      } duration-300 fixed top-0 right-0 bottom-0 left-0 backdrop-blur-md`}
    >
      <div className="w-[400px] mt-[10px] mx-auto bg-slate-700 rounded-md p-5">
        {children}
      </div>
    </div>
  );
}

export default Modal;
