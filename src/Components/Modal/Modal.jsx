import "./modal.css";
import Backdrop from "./Backdrop";

function Modal({ handleModal }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <p>You sure?</p>
        <div className="btns">
          <button className="btn btn--alt" onClick={handleModal}>
            Cancel
          </button>
          <button className="btn">Confirm</button>
        </div>
      </div>
      <Backdrop onClick={handleModal}></Backdrop>
    </div>
  );
}

export default Modal;
