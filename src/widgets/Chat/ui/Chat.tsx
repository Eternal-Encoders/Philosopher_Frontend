import classNames from 'classnames';
import cls from './Chat.module.scss';
import { Message } from 'shared/ui/Message/Message';
import { AnswerMessage } from 'shared/ui/AnswerMessage/AnswerMessage';
import { Input } from 'shared/ui/Input/Input';

interface IChatProps {
  className?: string;
}

export const Chat = ({ className }: IChatProps) => {
  return (
    <div className={classNames(cls.Chat, {}, [className])}>
      <Message />
      <AnswerMessage />
      <Input className={cls.Chat__input} />
    </div>
  );
};