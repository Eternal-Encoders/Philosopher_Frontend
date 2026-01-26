import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { AnswerMessage } from 'shared/ui/AnswerMessage/AnswerMessage';
import { Form, type FormInterface } from 'shared/ui/Form/Form';
import { Input } from 'shared/ui/Input/Input';
import { Message } from 'shared/ui/Message/Message';
import { getUniqId } from 'shared/utils/getUniqId'; // Убедись, что путь верный
import { chatData } from 'shared/__mocks__/chat/data';
import cls from './Chat.module.scss';

export interface IChatMessage {
  id: string | number;
  message: string;
  createdAt: Date;
  updatedAt: Date | null;
  type: 'user' | 'ai';
}

interface IExtraDefaultProps {
  width?: string;
  inputBottom?: string;
  height?: string;
}

const defaultExtra: IExtraDefaultProps = {
  width: '65%',
  inputBottom: '-8px',
  height: '92dvh',
};

interface IChatProps {
  className?: string;
  extra?: IExtraDefaultProps;
}

// Функция для начальной подготовки данных (сливаем моки в один массив и сортируем)
const getInitialMessages = (): IChatMessage[] => {
  const initialData: IChatMessage[] = [
    ...chatData.userQuestions,
    ...chatData.AIAnswers
  ];
  // Сортировка по дате, чтобы сообщения шли по порядку
  return initialData.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
};

export const Chat = (props: IChatProps) => {
  const { className, extra: {
    width = defaultExtra.width,
    inputBottom = defaultExtra.inputBottom,
    height = defaultExtra.height
  } = defaultExtra } = props;

  const [value, setValue] = useState<string>('');
  // Используем ОДИН массив для всех сообщений
  const [messages, setMessages] = useState<IChatMessage[]>(getInitialMessages);
  const [isLoading, setIsLoading] = useState(false); // Флаг загрузки

  const chatRef = useRef<HTMLDivElement>(null);

  // Автоскролл
  useEffect(() => {
    if (chatRef.current) {
      // Используем behavior: 'smooth' для плавности
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  const handleSubmit = async(form: FormInterface) => {
    if (!form.question.trim() || isLoading) return; // Защита от пустых и повторных отправок

    const userMessage: IChatMessage = {
      id: getUniqId(),
      message: form.question,
      createdAt: new Date(),
      updatedAt: null,
      type: 'user',
    };

    // 1. Сразу добавляем сообщение пользователя в чат (оптимистичный UI)
    setMessages((prev) => [...prev, userMessage]);
    setValue(''); // Очищаем инпут сразу
    setIsLoading(true); // Включаем режим загрузки

    try {
      const postData = { prompt: form.question };
      const response = await axios.post(`${import.meta.env.VITE_LLM_DOMAIN}/ask`, postData);

      const aiMessage: IChatMessage = {
        id: getUniqId(),
        message: response.data.response,
        createdAt: new Date(),
        updatedAt: null,
        type: 'ai',
      };

      // 2. Добавляем ответ от ИИ
      setMessages((prev) => [...prev, aiMessage]);

    } catch(error) {
      console.error('Ошибка при запросе:', error);
      // Тут можно добавить сообщение об ошибке в чат или toast notification
      const errorMessage: IChatMessage = {
        id: getUniqId(),
        message: 'Произошла ошибка при получении ответа. Попробуйте позже.',
        createdAt: new Date(),
        updatedAt: null,
        type: 'ai', // Или отдельный тип 'system'
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // Выключаем загрузку в любом случае
    }
  };

  return (
    <div className={classNames(cls.Chat, {}, [className])}>
      <div className={cls.Chat__container}
        style={{ width, height }}
      >
        <div className={cls.Chat__messages}
          ref={chatRef}
        >
          {/* Рендерим единый список сообщений */}
          {messages.map((item) => {
            if (item.type === 'user') {
              return (
                <Message key={item.id}
                  value={item.message}
                />
              );
            }
            return (
              <AnswerMessage key={item.id}
                value={item.message}
              />
            );
          })}

          {/* Можно добавить визуальный индикатор, если бот печатает */}
          {isLoading && (
            <div className={cls.Chat__typing}>
              AI печатает...
            </div>
          )}
        </div>

        <Form onSubmit={(val) => handleSubmit(val)}>
          <Input
            autoComplete='off'
            bottom={inputBottom}
            className={cls.Chat__input}
            disabled={isLoading} // Блокируем инпут во время запроса
            name='question'
            placeholder={isLoading ? 'Подождите ответ...' : 'Спросите что-нибудь...'}
            type='text'
            value={value}
            onChange={onChange}
          />
        </Form>
      </div>
    </div>
  );
};