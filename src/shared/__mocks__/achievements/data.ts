import Car from '../../../shared/assets/Car.png';
import RobotWithChildren from '../../../shared/assets/RobotWithChildren.png';
import type { AchievementProps } from './types';
import { getUniqId } from 'shared/utils/getUniqId';

export const achievementsData: AchievementProps[] = [
  {
    id: getUniqId(),
    src: Car,
    alt: 'Индивидуалист',
    title: 'Индивидуалист',
    description: 'Достигните концовки «Индивидуалист»',
    isCompleted: true,
  },
  {
    id: getUniqId(),
    src: RobotWithChildren,
    alt: 'Коллективист',
    title: 'Коллективист',
    description: 'Достигните концовки «Коллективист»',
    isCompleted: false,
  },
  // {
  //   id: getUniqId(),
  //   src: RobotWithChildren,
  //   alt: 'Коллективист',
  //   title: 'Коллективист',
  //   description: 'Достигните концовки «Коллективист»',
  //   isCompleted: false,
  // },
  // {
  //   id: getUniqId(),
  //   src: RobotWithChildren,
  //   alt: 'Коллективист',
  //   title: 'Коллективист',
  //   description: 'Достигните концовки «Коллективист»',
  //   isCompleted: false,
  // },
  // {
  //   id: getUniqId(),
  //   src: RobotWithChildren,
  //   alt: 'Коллективист',
  //   title: 'Коллективист',
  //   description: 'Достигните концовки «Коллективист»',
  //   isCompleted: false,
  // },
  // {
  //   id: getUniqId(),
  //   src: RobotWithChildren,
  //   alt: 'Коллективист',
  //   title: 'Коллективист',
  //   description: 'Достигните концовки «Коллективист»',
  //   isCompleted: false,
  // },
];