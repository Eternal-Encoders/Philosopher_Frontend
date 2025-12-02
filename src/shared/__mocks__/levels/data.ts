import Car from '../../../shared/assets/Car.png';
import Miku from '../../../shared/assets/Miku.png';
import RobotWithChildren from '../../../shared/assets/RobotWithChildren.png';
import Alch from '../../../shared/assets/Alch.png';
import Cyborg from '../../../shared/assets/Cyborg.png';
import type { LevelProps } from './types';
import { getUniqId } from 'shared/utils/getUniqId';

export const levelsData: LevelProps[] = [
  {
    id: getUniqId(),
    index: 1,
    img: '',
    src: Car,
    alt: 'Car',
    title: 'Автопилот',
    description: 'Следует ли ограничивать автономию машин ради сохранения человеческого достоинства и морального выбора?',
    progress: '75%',
    isCompleted: false,
    isAllowed: true,
  },
  {
    id: getUniqId(),
    index: 2,
    img: '',
    src: Miku,
    alt: 'Miku',
    title: 'ИИ-каверы',
    description: 'Следует ли ограничивать автономию машин ради сохранения человеческого достоинства и морального выбора?',
    progress: '0%',
    isCompleted: false,
    isAllowed: false,
  },
  {
    id: getUniqId(),
    index: 3,
    img: '',
    src: RobotWithChildren,
    alt: 'RobotWithChildren',
    title: 'Робо-няня',
    description: 'Следует ли ограничивать автономию машин ради сохранения человеческого достоинства и морального выбора?',
    progress: '0%',
    isCompleted: false,
    isAllowed: false,
  },
  {
    id: getUniqId(),
    index: 4,
    img: '',
    src: Alch,
    alt: 'Alch',
    title: 'Сыворотка интеллекта',
    description: 'Следует ли ограничивать автономию машин ради сохранения человеческого достоинства и морального выбора?',
    progress: '0%',
    isCompleted: false,
    isAllowed: false,
  },
  {
    id: getUniqId(),
    index: 5,
    img: '',
    src: Cyborg,
    alt: 'Cyborg',
    title: 'Be Right Back',
    description: 'Следует ли ограничивать автономию машин ради сохранения человеческого достоинства и морального выбора?',
    progress: '0%',
    isCompleted: false,
    isAllowed: false,
  },
];