import classNames from 'classnames';
import cls from './Achievement.module.scss';
import type { AchievementProps } from 'shared/__mocks__/achievements/types';

interface IAchievementProps {
  className?: string;
  data: AchievementProps;
}

export const Achievement = ({ className, data }: IAchievementProps) => {
  return (
    <div className={classNames(cls.Achievement, {}, [className])}>
      <div className={cls.Achievement__container}>
        <div className={cls.Achievement__wrapper}>
          <img alt={data.alt}
            className={classNames(cls.Achievement__img, !data.isCompleted && cls.Achievement__img_notCompleted)}
            src={data.src}
          />
          <div className={cls.Achievement__right}>
            <h3 className={cls.Achievement__title}>
              {data.title}
            </h3>
            <span className={cls.Achievement__description}>
              {data.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
