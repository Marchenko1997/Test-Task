import Modal from 'react-modal';
import css from './ModalWindow.module.css';
import Icon from '../../Icon/Icon';
import { useModalContext } from '../../../context/useModalContext';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const ModalWindow = ({ modalName }) => {
  const { isOpen, modalContent, closeModal } = useModalContext();

  console.log(`Rendering ModalWindow for ${modalName}: isOpen = ${isOpen[modalName]}`);
  console.log('Modal content:', modalContent[modalName]);

  return (
    <Modal
      isOpen={isOpen[modalName]}
      onRequestClose={() => closeModal(modalName)}
      className={css.modalData}
      overlayClassName={css.modalBackdrop}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <button
        type="button"
        className={css.modalCloseButton}
        onClick={() => closeModal(modalName)}
      >
        <Icon nameIcon="close" className={css.iconCross} />
      </button>
      {modalContent[modalName]}
    </Modal>
  );
};

ModalWindow.propTypes = {
  modalName: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default ModalWindow;
