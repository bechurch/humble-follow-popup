import React from 'react'
import Modal from 'react-responsive-modal'

import styles from '../styles.css'

import CloseIcon from '../components/icons/CloseIcon'
import Header from '../components/Header'
import SocialMediaCTAs from '../components/SocialMediaCTAs'
import Message from '../components/Message'
/*
TODO
- ensure that the css is prefixed but not uniqified
- remove css modules
- find an auto css prefixer
*/

/*
  🖼 MODAL
*/

const CLASSES = {
  modal: 'modalContent',
  closeButton: 'closeButton'
}

const HumbleFollowModal = ({
  modalIsOpen,
  closeModal,
  title,
  messageText,
  socialAccounts,
  closeText
}) => {
  return (
    <Modal
      open={modalIsOpen}
      onClose={closeModal}
      classNames={CLASSES}
      closeIconSvgPath={<CloseIcon />}
    >
      <Header title={title} />
      <div className={styles.body}>
        <Message messageText={messageText} closeModal={closeModal} closeText={closeText} />
        <SocialMediaCTAs socialAccounts={socialAccounts} />
      </div>
      <button className={styles.messageButton} onClick={closeModal}>{closeText}</button>
    </Modal>)
}

export default HumbleFollowModal
