import classNames from 'classnames';
import cls from './Levels.module.scss';
import { Carousel } from 'widgets/Carousel';
import { Achievements } from 'widgets/Achievements';
import { LevelWrapper } from 'widgets/LevelWrapper';
import { useState } from 'react';

interface ILevelsProps {
  className?: string;
}

export const Levels = ({ className }: ILevelsProps) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  const onLevelClick = (index: number) => {
    setSelectedLevel(index);
  };

  const onBeforeClick = () => {
    if (selectedLevel <= 1) {
      //Ставим последний уровень
      setSelectedLevel(5);
    } else {
      setSelectedLevel(selectedLevel - 1);
    }
  };

  const onAfterClick = () => {
    if (selectedLevel >= 5) {
      //Ставим последний уровень
      setSelectedLevel(1);
    } else {
      setSelectedLevel(selectedLevel + 1);
    }
  };

  return (
    <div className={classNames(cls.Levels, {}, [className])}>
      <div className={cls.Levels__container}>
        <header>
          <Carousel className={cls.Carousel}
            selectedLevel={selectedLevel}
            onLevelClick={onLevelClick}
          />
        </header>
        <main>
          <LevelWrapper className={cls.LevelWrapper}
            selectedLevel={selectedLevel}
            onAfterClick={onAfterClick}
            onBeforeClick={onBeforeClick}
          />
        </main>
        <footer>
          <Achievements className={cls.Achievements}
            selectedLevel={selectedLevel}
          />
        </footer>
      </div>
    </div>
  );
};
