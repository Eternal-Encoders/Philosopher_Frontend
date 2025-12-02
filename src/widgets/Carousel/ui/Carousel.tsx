import classNames from 'classnames';
import cls from './Carousel.module.scss';
import { levelsData } from 'shared/__mocks__/levels/data';
import type { LevelProps } from 'shared/__mocks__/levels/types';

interface ICarouselProps {
  className?: string;
  selectedLevel: number;
  onLevelClick: (index: number) => void;
}

export const Carousel = ({ className, onLevelClick, selectedLevel}: ICarouselProps) => {
  const onClickHandle = (index: number) => {
    onLevelClick(index);
  };

  return (
    <div className={classNames(cls.Carousel, {}, [className])}>
      <div className={cls.Carousel__container}>
        {levelsData.map((level: LevelProps) => {
          return (
            <img alt={level.alt}
              className={classNames(cls.Carousel__img, selectedLevel === level.index && cls.Carousel__img_selected)}
              key={level.id}
              src={level.src}
              onClick={() => onClickHandle(level.index)}
            />
          );
        })}
      </div>
    </div>
  );
};
