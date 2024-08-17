import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modalContent}
    overlayClassName={css.modalOverlay}
    contentLabel="Image Modal"
  >
    <img
      src={imageUrl}
      alt="Large Image"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </Modal>
);

export default ImageModal;
