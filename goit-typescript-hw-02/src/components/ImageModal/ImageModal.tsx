import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  altText: string;
  onRequestClose: () => void;
}

export default function ImageModal({
  isOpen,
  imageUrl,
  altText,
  onRequestClose,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "none",
          border: "none",
          padding: 0,
        },
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{ maxWidth: "100%", maxHeight: "100vh" }}
      />
    </Modal>
  );
}
