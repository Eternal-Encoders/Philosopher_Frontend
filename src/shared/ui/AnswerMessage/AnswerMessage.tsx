import classNames from 'classnames';
import cls from './AnswerMessage.module.scss';

interface IAnswerMessageProps {
  className?: string;
  value: string;
}

export const AnswerMessage = ({ className, value }: IAnswerMessageProps) => {
  return (
    <span className={classNames(cls.Message, {}, [className])}>
      {value}
    </span>
  );
};
