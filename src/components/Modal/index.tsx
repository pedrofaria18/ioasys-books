import { ReactNode, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

interface IModal {
  isOpen: boolean
  setIsOpen: () => void
  children: ReactNode
}

export default function Modal({ isOpen, setIsOpen, children }: IModal) {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    setModalStatus(isOpen)
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      isOpen={modalStatus}
      onRequestClose={setIsOpen}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={setIsOpen} className="react-modal-close">
        X
      </button>
      {children}
    </ReactModal>
  )
}
