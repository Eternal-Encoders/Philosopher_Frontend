import classNames from 'classnames';
import cls from './Cards.module.scss';

interface ICardsProps {
  className?: string;
}

export const Cards = ({ className }: ICardsProps) => {
  return (
    <div className={classNames(cls.Cards, {}, [className])}>
      CARDS PAGE
    </div>
  );
};
