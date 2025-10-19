import classNames from 'classnames';
import cls from './NotFound.module.scss';

interface INotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: INotFoundProps) => {
  return (
    <div className={classNames(cls.NotFound, {}, [className])}>
      NOTFOUND PAGE
    </div>
  );
};
