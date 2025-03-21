import { useEffect, useRef } from "react";
import closeIcon from "../../images/X.png";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import "./modal.css";

export const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const modalRef = useRef(null);
  const eventHandler = (e) => {
    if (e.key === "Escape") {
      console.log("ESC button pressed!");
      setIsModalOpen(false);
    }
  };

  const outsideClickHandler = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      console.log("Click outside the modal!");
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", eventHandler);
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("keydown", eventHandler);
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

  return (
    <div className={`backdrop ${isModalOpen ? "" : "is-hidden"}`}>
      <div className="modal" ref={modalRef}>
        <h1>Pick a theme</h1>
        <ThemeSelector />
        <button
          className="close-modal-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            className="close-modal-icon"
            width={30}
            height={30}
            src={closeIcon}
            alt="Close"
          />
        </button>
      </div>
    </div>
  );
};
