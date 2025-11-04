import classNames from 'classnames';
import { Chat } from 'pages/Chat';
import cls from './Book.module.scss';
import Markdown from 'react-markdown';
import book from 'shared/__mocks__/book/study_fies.md';
import { useMemo, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { getShorterIfOverflow } from 'shared/utils/getShorterIfOverflow';

interface IBookProps {
  className?: string;
}

const Book = ({ className }: IBookProps) => {
  const [bookContent] = useState(book);

  // Разбиваем markdown на chunks для виртуализации
  const markdownChunks = useMemo(() => {
    // Разбиваем по заголовкам или параграфам
    const chunks = bookContent.split(/(?=^#|\n\n)/gm);
    return chunks.filter(chunk => chunk.trim().length > 0);
  }, [bookContent]);

  const renderChunk = (index: number) => (
    <Markdown
      components={{
        code: ({ className, children, ...props }) => {
          const content = String(children);
          if (content.length > 1000) {
            return (
              <pre className={className}>
                <code {...props}>
                  {content.slice(0, 1000)}
                  ...
                  {/* Можно добавить кнопку "Показать больше" */}
                </code>
              </pre>
            );
          }
          return (
            <code className={className}
              {...props}
            >
              {children}
            </code>
          );
        }
      }}
    >
      {markdownChunks[index]}
    </Markdown>
  );

  return (
    <div className={classNames(cls.Book, {}, [className])}>
      <div className={cls.Book__row}>
        <div className={cls.Book__container}
          style={{marginRight: '8px'}}
        >
          <div className={cls.Book__navigation}>
            <header
              className={cls.Book__header}
              style={{marginBottom: '5px'}}
            >
              Учебное пособие
            </header>
            <ul
              className={cls.BookNavigation__list}
              role='list'
            >
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('Авторы', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('Введение', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('Раздел I. Мир и знание о мире', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('Глава 1. Картина мира, феномен мировоззрения в русской философии', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('1.1. Картина мира и мировоззрение: к определению понятий', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('1.2. Типология мировоззрений: основные концепции', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('1.3. Понятие «мировоззрение» в контексте русской философии', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('1.4. Идеализм как мировоззренческая установка культуры России', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow(`Глава 2. Философские концепции истории. 
                  О пониманиях истории. Цивилизационный подход. История и современность`, 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.1. Философские концепции истории', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.1.1 История, общие подходы', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.1.2 История и прогресс', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.2. О способах понимании истории', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.2.1 История и смысл', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.2.2 История и память', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.3. Цивилизационный подход', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.3.1 Возникновение термина. Стадиальный вариант цивилизационного подхода', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.3.2 Теория локальных цивилизаций', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.3.3 Ценности и познавательные нормы в структуре цивилизации', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.4. История и современность', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.4.1 Когда наступает современность?', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.4.2 Чему противопоставляется современность?', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.4.3 Чем является современность?', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('2.4.4 Что будет после современности?', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('X.X.X Философия, социология и психология деятельности в российской мыслительной', 28)}
              </li>
              <li className={cls.BookNavigation__item}>
                {getShorterIfOverflow('Раздел III. Человек: тело, сознание, “я”, личность, свобода, этика, деятельность.', 28)}
              </li>
            </ul>
          </div>
          <Virtuoso
            className={cls.Book__content}
            itemContent={renderChunk}
            overscan={200} // Предзагрузка
            totalCount={markdownChunks.length}
          />
        </div>
        <Chat
          extra={{width: '93%', inputBottom: '0'}}
        />
      </div>
    </div>
  );
};

export default Book;