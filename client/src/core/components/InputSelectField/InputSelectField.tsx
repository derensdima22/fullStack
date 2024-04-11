import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export interface InputSelectFieldOption {
  label: string;
  value: string;
}

export interface InputSelectFieldProps {
  options: InputSelectFieldOption[];
  name: string;
  label?: string | boolean;
  className?: string;
}

export const InputSelectField = (props: InputSelectFieldProps): ReactElement => {
  const {
    options,
    name,
    label,
    className,
  } = props;

  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods?.control ?? {}}
      render={({ field: { ...field } }) => (
        <TextField
          {...field}
          className={className}
          select
          value={field.value || ''}
          label={label}
        >
          {
            options.map(({ label, value }: InputSelectFieldOption) =>
              <MenuItem key={value} value={value}>{label}</MenuItem>,
            )
          }
        </TextField>
      )}
    />
  );
};
