import menu from "../../images/menu-icon.svg";

export const OpenModalBtn = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <button
        className="open-modal-btn"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <img src={menu} alt="menu" />
      </button>
    </>
  );
};
