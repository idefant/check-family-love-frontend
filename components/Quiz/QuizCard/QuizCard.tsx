import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './QuizCard.module.scss';

interface QuizCardProps {
  number: number;
  question: string;
  description?: string;
  children: ReactNode;
  actualQuestionNumber?: number;
  error?: ReactNode;
}

const QuizCard: FC<QuizCardProps> = ({
  number,
  question,
  children,
  actualQuestionNumber = 1,
  error,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [wrapperHeight, setWrapperHeight] = useState(number === 1 ? undefined : 0);

  const handleOpening = () => {
    if (actualQuestionNumber >= number) {
      setWrapperHeight(cardRef.current?.offsetHeight);
    }
  };

  const handleOpened = () => setWrapperHeight(undefined);

  useEffect(() => {
    if (actualQuestionNumber >= number) {
      handleOpened();
    }
  }, [actualQuestionNumber, number]);

  return (
    <CSSTransition
      in={actualQuestionNumber >= number}
      timeout={600}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: style.wrapperStartOpening,
        enterActive: style.wrapperOpening,
        enterDone: style.wrapperOpened,
      }}
      onEntering={handleOpening}
      onEntered={handleOpened}
    >
      <div className={style.wrapper} style={{ height: wrapperHeight }}>
        <div className={style.card} ref={cardRef}>
          <div className={style.number}>Вопрос {number}/13</div>
          <div className={style.data}>
            <div className={style.dataQuestion}>
              <div className={style.dataQuestionMain}>{question}</div>
              {description && <div className={style.dataQuestionDescription}>{description}</div>}
            </div>
            {error && <div className={style.dataError}>{error}</div>}
            <div className={style.dataControl}>{children}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default QuizCard;
