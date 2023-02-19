import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
}

const Backdrop = () => {
  return <div className='backdrop' />;
};

const ModalOverlay = (props: ModalProps) => {
  return (
    <div className='modal'>
      <div>{props.children}</div>
    </div>
  );
};

function Modal(props: ModalProps) {
  const portalRoot = document.getElementById('overlay');

  if (!portalRoot) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalRoot)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalRoot
      )}
    </>
  );
}

export default Modal;
