import classNames from 'classnames';
import cls from './Book.module.scss';

interface IBookProps {
  className?: string;
}

export const Book = ({ className }: IBookProps) => {
  return (
    <div className={classNames(cls.Book, {}, [className])}>
      BOOK PAGE
    </div>
  );
};
