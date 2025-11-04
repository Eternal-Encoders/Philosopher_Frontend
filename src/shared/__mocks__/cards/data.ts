import { getUniqId } from 'shared/utils/getUniqId';
import Man from '../../assets/Man.png';
import Person from '../../assets/icons/Person.svg';
import Robot from '../../assets/icons/Robot.svg';

interface IImgData {
  src: string;
  alt: string;
}

interface ICardsData {
  id: string;
  icons: IImgData[];
  imgData: IImgData;
  text: string;
  extraText: string;
}

export const cardsData: ICardsData[] = [
  {
    id: getUniqId(),
    icons: [
      {
        alt: 'Robot',
        src: Robot,
      },
      {
        alt: 'Person',
        src: Person,
      }
    ],
    imgData: {
      alt: 'Man',
      src: Man,
    },
    text: 'Автопилоты множатся на дорогах. Хотите обложить их новым налогом, пока люди не разучились водить?',
    extraText: 'Министр транспорта',
  },
];