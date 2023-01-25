import classNames from 'classnames';
import { FC } from 'react';

import useCounter from '../../hooks/useCounter';
import Icon from '../Icons';

import style from './StepPagination.module.scss';

interface StepPaginationProps {
  step: ReturnType<typeof useCounter>;
  availableStepValue: number;
}

const StepPagination: FC<StepPaginationProps> = ({ step, availableStepValue }) => (
  <div className={style.container}>
    <button
      type="button"
      onClick={step.decrement}
      className={classNames(style.nav, style.navBack)}
      disabled={step.value === 1}
    >
      <Icon.ChevronLeft />
      <div className={style.navText}>Назад</div>
    </button>
    <div className={style.title}>Шаг {step.value} / 9</div>
    <button
      type="button"
      onClick={step.value < availableStepValue ? step.increment : undefined}
      className={classNames(style.nav, style.navNext)}
      disabled={step.value === availableStepValue || step.value === 9}
    >
      <div className={style.navText}>Дальше</div>
      <Icon.ChevronRight />
    </button>
  </div>
);

export default StepPagination;
