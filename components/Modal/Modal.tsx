import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { TModal } from '../../hooks/useModal';
import Icon from '../Icons';

import style from './Modal.module.scss';

interface ModalProps {
  title: string;
  children: ReactNode;
  modal: TModal;
}

const Modal: FC<ModalProps> = ({ title, children, modal }) => {
  const { isOpen, close } = modal;

  if (typeof window !== 'object') return null;

  return createPortal(
    <CSSTransition
      in={isOpen}
      timeout={150}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: style.modalOpening,
        enterDone: style.modalOpened,
        exitActive: style.modalExiting,
      }}
    >
      <div className={style.wrapper} onClick={close}>
        <div className={style.body} onClick={(e) => e.stopPropagation()}>
          <div className={style.title}>
            {title}
            <button type="button" className={style.closeButton} onClick={close}>
              <Icon.X />
            </button>
          </div>
          <div className={style.content}>{children}</div>
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
};

export default Modal;
