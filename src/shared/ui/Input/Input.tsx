import classNames from 'classnames';
import cls from './Input.module.scss';

interface IInputProps {
  className?: string;
}

export const Input = ({ className }: IInputProps) => {
  return (
    <div className={classNames(cls.InputWrapper, [className])}>
      <input className={classNames(cls.Input)}
        placeholder='Спросите что-нибудь...'
      />
      <i className={classNames(cls.Icon)} />
    </div>
  );
};
