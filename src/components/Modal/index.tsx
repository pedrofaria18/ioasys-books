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
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '4px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  )
}
