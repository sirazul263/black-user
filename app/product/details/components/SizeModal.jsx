"use client";
import Modal from "react-modal";
const SizeModal = ({ show, setShow }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={() => setShow(false)}
      className="size-modal"
      overlayClassName="size-modal-overlay"
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      <div className="modal-body p-0">
        <img src="../img/size.svg" alt="img" className="img-fluid transition" />
      </div>
    </Modal>
  );
};

export default SizeModal;
