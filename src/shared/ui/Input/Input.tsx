import classNames from 'classnames';
import { ETypes } from 'shared/types/types';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange' | 'placeholder'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  size?: ETypes.SMALL;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: IInputProps) => {
  const {
    className,
    size = ETypes.SMALL,
    value,
    placeholder,
    onChange,
    ...otherProps
  } = props;

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods = {
    [cls.small]: size === ETypes.SMALL,
  };

  return (
    <div className={classNames(cls.InputWrapper, [className], mods)}>
      <input
        {...otherProps}
        className={classNames(cls.Input)}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandle}
      />
      <i className={classNames(cls.Icon)} />
    </div>
  );
};
