import { FormWrapperProps } from '@core/types';
import { KeyboardEvent } from 'react';
import { FieldValues, FormProvider } from 'react-hook-form';

export const FormWrapper = <T extends FieldValues>(props: FormWrapperProps<T>) => {
  const {
    methods,
    children,
    className,
    formProps = {},
  } = props;

  const disableEnterKeySubmitting = (
    event: KeyboardEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;

    if ((event.code === 'Enter' || event.code === 'NumpadEnter') && !['TEXTAREA'].includes(target.tagName)) {
      event.preventDefault();
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onKeyDown={disableEnterKeySubmitting} {...formProps}>
        {children}
      </form>
    </FormProvider>
  );
};
