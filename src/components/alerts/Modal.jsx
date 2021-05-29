import React from "react";

function Modal({ visible, get, title }) {
  return (
    <Modal open={visible} onClose={get(null)}>
      My Reusable '{title}' Modal!
      <button onClick={get(true)}>Yes</button>
      <button onClick={get(false)}>No</button>
    </Modal>
  );
}
export default Modal;