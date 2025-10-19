import classNames from 'classnames';
import cls from './Chat.module.scss';

interface IChatProps {
  className?: string;
}

export const Chat = ({ className }: IChatProps) => {
  return (
    <div className={classNames(cls.Chat, {}, [className])}>
      CHAT PAGE
    </div>
  );
};
