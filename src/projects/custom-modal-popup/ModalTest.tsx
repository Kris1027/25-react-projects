import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

export const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal((prev) => !prev);
  }

  const modal = createPortal(
    <Modal
      close={handleShowModal}
      header="Modal"
      body="Modal Body"
      footer="Modal Footer"
    />,
    document.body
  );

  return (
    <div className="p-4">
      <button
        onClick={handleShowModal}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-90"
      >
        Show Modal
      </button>
      {showModal && modal}
    </div>
  );
};
