import { ThemePicker } from "../ThemePicker/ThemePicker";
import "./modal.css";

export const Modal = () => {
  return (
    <div className="backdrop is-hidden">
      <div className="modal">
        <h1>Pick a theme</h1>
        <ThemePicker />
      </div>
    </div>
  );
};
