import classNames from 'classnames';
import cls from './Persons.module.scss';

interface IPersonsProps {
  className?: string;
}

export const Persons = ({ className }: IPersonsProps) => {
  return (
    <div className={classNames(cls.Persons, {}, [className])}>
      PERSONS PAGE
    </div>
  );
};
