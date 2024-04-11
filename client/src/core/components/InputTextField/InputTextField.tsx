import { InputTextFieldProps } from '@core/types';
import { TextField } from '@mui/material';
import { ReactElement } from 'react';
import { Controller, FieldPathValue, useFormContext } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types/path';

export const InputTextField = (props: InputTextFieldProps): ReactElement => {
  const {
    name,
    autoCompleteOff,
    required,
    className,
    ...fieldProps
  } = props;

  const { control } = useFormContext();

  return (
    <Controller
      rules={{ required }}
      name={name}
      control={control}
      defaultValue={'' as FieldPathValue<Record<string, string | number>, FieldPath<Record<string, string | number>>>}
      render={({ field: { ref, ...field }, fieldState }) => (
        <TextField
          {...fieldProps}
          {...field}
          className={className}
          variant={fieldProps.variant ?? 'outlined'}
          inputRef={ref}
          id={name}
          error={!!fieldState.error}
          helperText={fieldState.error?.message ?? ''}
          autoComplete={autoCompleteOff}
        />
      )}
    />
  );
};
