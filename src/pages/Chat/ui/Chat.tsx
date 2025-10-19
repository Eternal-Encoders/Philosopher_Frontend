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

const defaultExtra = {
  width: '65%',
  inputBottom: '-8px',
  height: '92dvh',
};

interface IChatProps {
  className?: string;
  extra?: {
    width?: string;
    inputBottom?: string;
    height?: string;
  };
}

export const LOCAL_STORAGE_QUESTIONS_KEY = 'QUESTIONS';

export const Chat = (props: IChatProps) => {
  const { className, extra: {
    width = defaultExtra.width,
    inputBottom = defaultExtra.inputBottom,
    height = defaultExtra.height
  } = defaultExtra } = props;


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

  const handleSubmit = (form: FormInterface) => {
    if (form.question.length <= 0) return;
    const rawQuestion: IUserQuestion = {
      id: getUniqId(),
      message: form.question,
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
        className={cls.Chat__container}
        style={{width, height}}
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
            bottom={inputBottom}
            className={cls.Chat__input}
            name='question'
            placeholder={'Спросите что-нибудь...'}
            type='text'
            value={value}
            onChange={onChange}
          />
        </Form>
      </div>
    </div>
  );
};