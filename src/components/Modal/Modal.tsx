import { useEffect, ReactElement } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";


let modalWrapper: HTMLElement;
function Modal(
  { children, onClose }:
    {
      children: ReactElement,
      onClose?: Function
    }) {

  let modal = document.createElement("div");
  modal.classList.add("modal-content", "col", "xl-1-2");

  useEffect(() => {
    const parent = document.body;
    modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal-custom_wrapper", "wrap", "xl-flexbox", "xl-middle", "xl-center");

    const modalCloserDiv = document.createElement("div");
    modalCloserDiv.classList.add("modal-closer")
    modalCloserDiv.style.zIndex = "998";

    modalWrapper.appendChild(modalCloserDiv);
    if (onClose)
      modalCloserDiv.addEventListener("click", (e) => {
        console.log(e.currentTarget, e.target);

        if (e.currentTarget === e.target) onClose(e)
      });

    parent.appendChild(modalWrapper);
    modal.style.zIndex = "999";
    modalWrapper.appendChild(modal);
    return () => { parent.removeChild(modalWrapper) }
  }, [])

  return ReactDOM.createPortal(
    children,
    modal
  )

}

export default Modal;