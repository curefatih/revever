import React, { ReactChildren, useEffect, ReactElement } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";


let modalWrapper: HTMLElement;
function Modal({ children, display }: { children: ReactElement, display?: boolean }) {

  let modal = document.createElement("div");
  modal.classList.add("modal-content", "col", "xl-1-4");

  useEffect(() => {
    const parent = document.body;
    modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal-custom_wrapper", "wrap", "xl-flexbox", "xl-middle", "xl-center");
    modalWrapper.style.opacity = display ? "1" : "0";
    parent.appendChild(modalWrapper);
    modalWrapper.appendChild(modal);
    return () => { parent.removeChild(modalWrapper) }
  }, [])

  return ReactDOM.createPortal(
    children,
    modal
  )

}

export default Modal;