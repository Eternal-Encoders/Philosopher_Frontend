import classNames from 'classnames';
import cls from './Message.module.scss';

interface IMessageProps {
  className?: string;
  value: string;
}

export const Message = ({ className, value}: IMessageProps) => {
  return (
    <span className={classNames(cls.Message, {}, [className])}>
      {value}
    </span>
  );
};
