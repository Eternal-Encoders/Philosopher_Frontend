import classNames from 'classnames';
import cls from './Message.module.scss';

interface IMessageProps {
  className?: string;
}

export const Message = ({ className }: IMessageProps) => {
  return (
    <span className={classNames(cls.Message, {}, [className])}>
      Чем отличается мировоззрение от идеологии?
    </span>
  );
};
