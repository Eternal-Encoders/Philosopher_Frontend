import classNames from 'classnames';
import cls from './Achievements.module.scss';
import { Achievement } from './Achievement';
import { achievementsData } from 'shared/__mocks__/achievements/data';
import type { AchievementProps } from 'shared/__mocks__/achievements/types';

interface IAchievementsProps {
  className?: string;
  selectedLevel?: number;
}

export const Achievements = ({ className }: IAchievementsProps) => {

  const all = achievementsData.length;
  const got = achievementsData.filter((achievement: AchievementProps) => achievement.isCompleted).length;
  const getPercent = (got: number, all: number) => {
    return Math.ceil(got / all * 100);
  };

  const completedInPercent = getPercent(got, all);

  return (
    <div className={classNames(cls.Achievements, {}, [className])}>
      <div className={cls.Achievements__container}>
        <div className={cls.Achievements__wrapper}>
          <h2 className={cls.Achievements__title}>
            Достижения (В работе)
          </h2>
          <span className={cls.Achievements__description}>
            Вы получили
            {' '}
            {got}
            {' '}
            из
            {' '}
            {all}
&nbsp;
            <span className={cls.Achievements__description_percent}>
              (
              {completedInPercent}
              %)
            </span>
          </span>
          <span className={cls.Achievements__progressBar}>
            <span style={{ height: '4px', background: 'white', display: 'flex', flex: `0 0 ${completedInPercent}%` }} />
            <span style={{ height: '4px', background: '#818181', display: 'flex', flex: `0 0 ${100 - completedInPercent}%` }} />
          </span>
        </div>
        {achievementsData.map((achievement: AchievementProps) => {
          return (
            <Achievement data={achievement}
              key={achievement.id}
            />
          );
        })}
      </div>
    </div>
  );
};
