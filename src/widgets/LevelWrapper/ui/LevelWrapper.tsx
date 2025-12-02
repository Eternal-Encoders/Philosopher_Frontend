import classNames from 'classnames';
import cls from './LevelWrapper.module.scss';
import { levelsData } from 'shared/__mocks__/levels/data';
import type { LevelProps } from 'shared/__mocks__/levels/types';
import { useNavigate } from 'react-router';

interface ILevelWrapperProps {
  className?: string;
  selectedLevel: number;
  onBeforeClick: () => void;
  onAfterClick: () => void;
}

export const LevelWrapper = (props: ILevelWrapperProps) => {
  const {
    className,
    onBeforeClick,
    onAfterClick,
    selectedLevel
  } = props;

  const chosenLevel = levelsData.find((level: LevelProps) => level.index === selectedLevel);

  const navigate = useNavigate();

  return (
    <div className={classNames(cls.LevelWrapper, {}, [className])}>
      <div className={cls.LevelWrapper__container}>
        {chosenLevel
          ? (
            <div className={cls.LevelWrapper__wrapper}>
              <button className={cls.LevelWrapper__before}
                type='button'
                onClick={onBeforeClick}
              >
                {'<'}
              </button>
              <div className={cls.LevelWrapper__left}>
                <div className={classNames(cls.LevelWrapper__imgWrapper, !chosenLevel.isAllowed && cls.LevelWrapper__imgWrapper_locked)}>
                  <img alt={chosenLevel.alt}
                    className={classNames(cls.LevelWrapper__img,)}
                    src={chosenLevel.src}
                  />
                </div>
              </div>
              <div className={cls.LevelWrapper__right}>
                <span className={cls.LevelWrapper__levelValue}>
                  уровень&nbsp;
                  {chosenLevel.index}
                </span>
                <h1 className={cls.LevelWrapper__title}>
                  «
                  {chosenLevel.title}
                  »
                </h1>
                <span className={cls.LevelWrapper__description}>
                  {chosenLevel.description}
                </span>
                <button className={cls.LevelWrapper__btn}
                  disabled={!chosenLevel.isAllowed}
                  type='button'
                  onClick={() => navigate('/cards')}
                >
                  Продолжить
                </button>
              </div>
              <button className={cls.LevelWrapper__after}
                type='button'
                onClick={onAfterClick}
              >
                {'>'}
              </button>
            </div>
          )
          : (
            <span>
              Данный уровень не найден
            </span>
          )}
      </div>
    </div>
  );
};
