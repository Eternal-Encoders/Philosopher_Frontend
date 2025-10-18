import classNames from 'classnames';
import Book from 'shared/assets/Book.svg';
import Medal from 'shared/assets/Medal.svg';
import Stars from 'shared/assets/Stars.svg';
import cls from './NavigationBar.module.scss';

interface INavigationBarProps {
  className?: string;
}

export const NavigationBar = ({ className }: INavigationBarProps) => {
  return (
    <div className={classNames(cls.NavigationBar, {}, [className])}>
      <div className={cls.NavigationBar__wrapper}>
        <button
          className={cls.NavigationBar__button}
          type='button'
        >
          +
        </button>
        <ul
          className={cls.NavigationBar__list}
          role='list'
        >
          <li className={cls.NavigationBar__item}>
            <div className={cls.NavigationBar__icon}>
              <img alt='Медаль'
                src={Medal}
              />
            </div>
            <span className={cls.NavigationBar__span}>
              Карточки
            </span>
          </li>
          <li className={cls.NavigationBar__item}>
            <div className={cls.NavigationBar__icon}>
              <img alt='Книга'
                src={Book}
              />
            </div>
            <span className={cls.NavigationBar__span}>
              Учебник
            </span>
          </li>
          <li className={cls.NavigationBar__item}>
            <div className={cls.NavigationBar__icon}>
              <img alt='Звёздочки'
                src={Stars}
              />
            </div>
            <span className={cls.NavigationBar__span}>
              Персоны
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
