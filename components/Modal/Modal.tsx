import { FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { TModal } from '../../hooks/useModal';
import Icon from '../Icons';
import Portal from '../Portal';

import style from './Modal.module.scss';

interface ModalProps {
  title: string;
  children: ReactNode;
  modal: TModal;
}

const Modal: FC<ModalProps> = ({ title, children, modal }) => {
  const { isOpen, close } = modal;

  const hiddenScroll = () => {
    const scrollWidth = window.innerWidth - document.body.clientWidth;
    document.body.className = 'noScroll';
    document.body.style.paddingRight = `${scrollWidth}px`;
  };

  const showScroll = () => {
    document.body.className = '';
    document.body.style.paddingRight = '';
  };

  if (typeof window !== 'object') return null;

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        timeout={150}
        classNames={{
          enter: style.modalOpenStart,
          enterActive: style.modalOpening,
          enterDone: style.modalOpened,
          exit: style.modalExitStart,
          exitActive: style.modalExiting,
        }}
        onEnter={hiddenScroll}
        onExited={showScroll}
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
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
