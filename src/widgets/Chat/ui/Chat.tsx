import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { chatData } from 'shared/__mocks__/chat/data';
import type { IUserQuestion } from 'shared/__mocks__/chat/types';
import { AnswerMessage } from 'shared/ui/AnswerMessage/AnswerMessage';
import { Form, type FormInterface } from 'shared/ui/Form/Form';
import { Input } from 'shared/ui/Input/Input';
import { Message } from 'shared/ui/Message/Message';
import { getUniqId } from 'shared/utils/getUniqId';
import cls from './Chat.module.scss';

interface IChatProps {
  className?: string;
}

export const LOCAL_STORAGE_QUESTIONS_KEY = 'QUESTIONS';

export const Chat = ({ className }: IChatProps) => {
  const [value, setValue] = useState<string>('');

  const initialDataFromLocalStorage: string = localStorage.getItem(LOCAL_STORAGE_QUESTIONS_KEY) || '';

  const rawQuestionsFromLocalStorage: IUserQuestion[] = initialDataFromLocalStorage ? JSON.parse(initialDataFromLocalStorage) : [];

  const [rawQuestions, setRawQuestions] = useState<IUserQuestion[]>(rawQuestionsFromLocalStorage);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Автоскролл вниз при добавлении нового сообщения
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [rawQuestions]);

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const handleSubmit = (obj: FormInterface) => {
    const rawQuestion: IUserQuestion = {
      id: getUniqId(),
      message: obj.question,
      createdAt: new Date(),
      updatedAt: null,
    };

    setRawQuestions([...rawQuestions, rawQuestion]);
    localStorage.setItem(LOCAL_STORAGE_QUESTIONS_KEY, JSON.stringify([...rawQuestions, rawQuestion]));
    setValue('');
  };

  return (
    <div
      className={classNames(cls.Chat, {}, [className])}

    >
      <div
        className={cls.Chat__messages}
        ref={chatRef}
      >
        {chatData.userQuestions.map((question) => (
          <Message
            key={question.id}
            value={question.message}
          />
        ))}
        {chatData.AIAnswers.map((answer) => (
          <AnswerMessage
            key={answer.id}
            value={answer.message}
          />
        ))}
        {rawQuestions.map((question) => (
          <Message
            key={question.id}
            value={question.message}
          />
        ))}
      </div>
      <Form
        onSubmit={(value) => handleSubmit(value)}
      >
        <Input
          className={cls.Chat__input}
          name='question'
          placeholder={'Спросите что-нибудь...'}
          type='text'
          value={value}
          onChange={onChange}
        />
      </Form>
    </div >
  );
};