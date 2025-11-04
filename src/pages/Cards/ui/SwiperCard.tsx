import { motion, useTransform, animate, MotionValue } from 'framer-motion';
import { useCallback, type ReactNode } from 'react';

interface ISwipeCard {
  x: MotionValue<number>;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  children: ReactNode;
}

export default function SwipeCard(props: ISwipeCard) {
  const {
    x,
    onSwipeLeft,
    onSwipeRight,
    isDragging,
    setIsDragging,
    children,
  } = props;

  const rotate = useTransform(x, [-120, 120], [-15, 15]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = useCallback((_: any, info: any) => {
    const offset = info.offset.x;
    if (offset < -50) {
      onSwipeLeft();
      animate(x, 0, { duration: 0.2 });
    } else if (offset > 50) {
      onSwipeRight();
      animate(x, 0, { duration: 0.2 });
    }
    setIsDragging(false);
  }, [onSwipeLeft, onSwipeRight, setIsDragging, x]);

  const onDragStart = useCallback(() => setIsDragging(true), [setIsDragging]);

  return (
    <motion.div
      drag='x'
      dragConstraints={{ left: -100, right: 100 }}
      dragElastic={0.2}
      style={{
        zIndex: 100,
        x,
        rotate,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onDragEnd={handleDragEnd}
      onDragStart={onDragStart}
    >
      {children}
    </motion.div>
  );
}
