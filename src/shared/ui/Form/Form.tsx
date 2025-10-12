import classNames from 'classnames';
import { useCallback } from 'react';

type HTMLFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;

interface IFormProps extends HTMLFormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit?: (obj: FormInterface) => void;
}

export interface FormInterface {
  [key: string]: string;
}

export const Form = (props: IFormProps) => {

  const {
    className,
    onSubmit,
    children
  } = props;

  const onSumbitHandle = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.currentTarget);
    const formObj: FormInterface = {};
    for (const [key, value] of Array.from(formData.entries())) {
      formObj[key] = value.toString().trim();
    }
    onSubmit?.(formObj);
  }, [onSubmit]);

  return (
    <form className={classNames([className])}
      onSubmit={onSumbitHandle}
    >
      {children}
    </form>
  );
};
