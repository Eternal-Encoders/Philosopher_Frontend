import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { AnswerMessage } from 'shared/ui/AnswerMessage/AnswerMessage';
import { Input } from 'shared/ui/Input/Input';
import { Message } from 'shared/ui/Message/Message';
import cls from './Chat.module.scss';

interface IChatProps {
  className?: string;
}

export const Chat = ({ className }: IChatProps) => {
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  return (
    <div className={classNames(cls.Chat, {}, [className])}>
      <Message />
      <AnswerMessage />
      <Input
        className={cls.Chat__input}
        placeholder={'Спросите что-нибудь...'}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};