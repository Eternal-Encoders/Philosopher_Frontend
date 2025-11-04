import classNames from 'classnames';
import cls from './Cards.module.scss';
import { cardsData } from 'shared/__mocks__/cards/data';
import Like from 'shared/assets/icons/Like.svg';
import Dislike from 'shared/assets/icons/Dislike.svg';
import Question from 'shared/assets/icons/Question.svg';
import Comments from 'shared/assets/icons/Comments.svg';
import SwipeCard from './SwiperCard';
import { useState } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

interface ICardsProps {
  className?: string;
}

export const Cards = ({ className }: ICardsProps) => {
  const defaultBackgroundColor = '#212121';
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-120, 0, 120],
    ['#ef4444', defaultBackgroundColor, '#22c55e']
  );


  return (
    <div className={classNames(cls.Cards, {}, [className])}>
      <div className={cls.Cards__container}>
        {cardsData.map((card) => {
          return (
            <div
              className={cls.Card}
              key={card.id}
            >
              <div className={cls.Card__icons}>
                {card.icons.map((icon) => (
                  <div
                    className={cls.IconWrapper}
                    key={icon.src}
                  >
                    <img
                      alt={icon.alt}
                      className={cls.Card__icon}
                      draggable={false}
                      src={icon.src}
                      style={{ userSelect: 'none' }}
                      title={icon.alt}
                    />
                  </div>
                )
                )}
              </div>
              <div className={cls.Card__text}>
                {card.text}
              </div>
              <div className={cls.Card__background}>
                <div className={cls.Card__background_centered}>
                  <SwipeCard
                    isDragging={isDragging}
                    setIsDragging={setIsDragging}
                    x={x}
                    onSwipeLeft={() => console.log('left')}
                    onSwipeRight={() => console.log('right')}
                  >
                    <div
                      className={cls.Card__outline}
                      style={{ background: isDragging ? background.get() : defaultBackgroundColor }}
                    >
                      <img
                        alt={card.imgData.alt}
                        className={cls.Cards__img}
                        draggable={false}
                        key={card.imgData.src}
                        src={card.imgData.src}
                      />
                    </div>
                  </SwipeCard>
                </div>
              </div>
              <div className={cls.Card__extraText}>
                {card.extraText}
              </div>
              <div className={cls.Card__extra}>
                <div className={cls.Card__question}>
                  <button
                    className={cls.Card__roundedButton}
                    type='button'
                    onClick={() => console.log('questions')}
                  >
                    <img
                      alt='Задать вопрос'
                      draggable={false}
                      src={Question}
                      style={{ userSelect: 'none' }}
                      title='Задать вопрос'
                    />
                  </button>
                  <div className={cls.Card__clue}>
                    h
                  </div>
                </div>
                <div className={cls.Card__actions}>
                  <div className={cls.Card__dislike}>
                    <button
                      className={cls.Card__roundedButton_big}
                      type='button'
                      onClick={() => console.log('dislike')}
                    >
                      <img
                        alt='Не нравится'
                        draggable={false}
                        src={Dislike}
                        style={{ userSelect: 'none' }}
                        title='Не нравится'
                      />
                    </button>
                    <div className={cls.Card__clue}>
                      ←
                    </div>
                  </div>
                  <div className={cls.Card__like}>
                    <button
                      className={cls.Card__roundedButton_big}
                      type='button'
                      onClick={() => console.log('like')}
                    >
                      <img
                        alt='Нравится'
                        draggable={false}
                        src={Like}
                        style={{ userSelect: 'none' }}
                        title='Нравится'
                      />
                    </button>
                    <div className={cls.Card__clue}>
                      →
                    </div>
                  </div>
                </div>
                <div className={cls.Card__comments}>
                  <button
                    className={cls.Card__roundedButton}
                    type='button'
                    onClick={() => console.log('comments')}
                  >
                    <img
                      alt='Комментарии'
                      draggable={false}
                      src={Comments}
                      style={{ userSelect: 'none' }}
                      title='Комментарии'
                    />
                  </button>
                  <div className={cls.Card__clue}>
                    c
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
