import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";
import { isMobileDevice } from "@/utils/responsive";

interface IModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: isMobileDevice() ? "90vw" : "35vw",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    overflow: "hidden",
    maxHeight: "90vh",
    zIndex: 1000000,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
};

const ModalComponent: React.FC<IModalComponentProps> = (props) => {
  const modalRef = useRef<HTMLDivElement | null>(null); // Specify the type of modalRef
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOutsideClick(true);
    }
  };

  useEffect(() => {
    setIsOutsideClick(false);

    if (props.isVisible) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [props.isVisible]);

  useEffect(() => {
    if (isOutsideClick) {
      props.onClose();
    }
  }, [isOutsideClick, props]);

  return (
    <Modal
      isOpen={props.isVisible}
      style={customStyles}
      onRequestClose={props.onClose}>
      <div ref={modalRef}>{props.children}</div>
    </Modal>
  );
};

export default ModalComponent;
